const Dao = require("./db.js");
const Entities = require("./Entities.js");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { Item_Entry, Setting } = require("./Entities.js");
const { MongoContext } = require("./MongoContext.js");
const fs = require("fs");


class Controller  {
    constructor(dao) {
        
        this.dao = dao;
        

    }

    async Login(req, res) {
        var { email, password } = req.body;

        var user = await this.daoCtx.Get(Entities.User, { email: email });


        var success = await this.CheckPassword(password, user);

        if (!success) {
            res.statusCode = 401;
            throw new Error("Helytelen felhasználónév vagy jelszó");
        }

        delete user.password_hash;

        //use the payload to store information about the user such as username, user role, etc.
        let payload = { user: user.email };

        //create the access token with the shorter lifespan
        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            algorithm: "HS256",
            //expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

        // //create the refresh token with the longer lifespan
        // let refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        //     algorithm: "HS256",
        //     expiresIn: process.env.REFRESH_TOKEN_LIFE
        // })

        // //store the refresh token in the user array
        // users[username].refreshToken = refreshToken

        //send the access token to the client inside a cookie
        res.cookie("jwt", accessToken, {
            // secure: true
            // , httpOnly: true
            // ,path: "/"
            expires: new Date(2030, 0)
        })

        return user;
    }


    async Logout(req, res) {

        var userJwt = jwt.verify(req.cookies.jwt, process.env.ACCESS_TOKEN_SECRET);
        var userName = userJwt.user

        //send the access token to the client inside a cookie
        res.cookie("jwt", "", {
            //, httpOnly: true
        })

        return true;
    }

    async CheckAccessCore(req, res) {
        try {

            var user;

            if (req.body) {
                if (Object.keys(req.body).includes("auth_token")) {
                    //@todo Oauth token check from body
                }
            }
            if (Object.keys(req.headers).includes("authorization")) {
                var authKey = await this.daoCtx.Get(Entities.Setting, { name: "oAuthToken" });

                if (authKey.value == req.headers["authorization"].replaceAll(/Bearer /g, "")) {
                    user = new Entities.User();
                    user.name = "machine";
                    user.isLoggedIn = true;
                    user.isAdmin = false;
                    return user;
                } else {
                    throw new Error("Access Token not valid");
                }

            }

            var userJwt = jwt.verify(req.cookies.jwt, process.env.ACCESS_TOKEN_SECRET);

            user = await this.daoCtx.Get(Entities.User, { email: userJwt.user });

            delete user.password_hash;
            delete user.createDate;
            

            user.isLoggedIn = true;

            return Object.assign({}, user);

        } catch (error) {

            res.statusCode = 401
            throw error;
        }
    }

    async getServerSideProps(req, res){
        try {

            const user = await this.CheckAccessCore(req, res);
            delete user._id;
            return {
    
                props: { user: user },
            }
        } catch (error) {
            res.setHeader("location", "/login");
            res.statusCode = 302;
            res.end();
        }
        delete user._id;
        return {
            props: { user: { isLoggedIn: false } },
        }
    }

    async ReadDirectory(d, isRecursive = false) {
        return new Promise((resolve, reject) => {
            var retF = [];
            fs.readdir(d, { withFileTypes: true }, async (err, files) => {
                if (err) {
                    reject(err);
                    return;
                }

                if(isRecursive){

                    var folders = files.filter((o) => {
    
                        return o.isDirectory() == true;
                    });
                }



                // var files = files.filter((o) => {

                //     return o.isFile() == true;
                // });

                for (var f of files) {
                    var o = Object.assign({}, f);
                    o.isDirectory = f.isDirectory();
                    retF.push(o);
                }

                if(isRecursive){

                    for (var d of folders) {
                        var fd = await this.ReadDirectory(d.path + "\\" + d.name);
                        for (var fdone of fd) {
                            retF.push(fdone);
                        }
                    }
                }

                resolve(retF);
            });
        });



    }



    async SortItems(items) {

        items.forEach(async (element) => {
            var item = await this.daoCtx.Get(Entities.Item, { id: element.id });
            item.sort = element.sort;
            await this.daoCtx.Update(item);
        });

    }

    async Init() {
        if (this.daoCtx != undefined) {
            return this.daoCtx;
        }

        await this.dao.connect();
  
        
        this.daoCtx = new MongoContext(this.dao);

        // setInterval(async () => {
        //     await this.daoCtx.Get(Entities.Setting, { name: "plcAddress" });
        // }, 3600000);

        // var settings = await this.daoCtx.GetList(Entities.Setting, {});

        // settings.forEach(element => {
        //     this.settings[element.name] = element.value;
        // });

        return this.daoCtx;
    }


    async CreateItem(itm) {

        var item = new Entities.Item();

        item = Object.assign(item, itm)

        item.id = await this.daoCtx.Add(item);

        return item;

    }

    async UpdateItem(itm) {
        var item = await this.daoCtx.Get(Entities.Item, { id: itm.id });

        item = Object.assign(item, itm);

        await this.daoCtx.Update(item);

        return item;
    }

    async DeleteItem(item) {
        item = await this.daoCtx.Get(Entities.Item, { id: item.id });
        await this.daoCtx.Delete(item);

        return true;
    }


    async SaveSettings(data) {
        Object.keys(data).forEach(async element => {
            var set = await this.daoCtx.Get(Entities.Setting, { name: element });
            set.value = data[element];

            await this.daoCtx.Update(set);

        });

        return true;
    }

    HashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function (err, hash) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(hash);
            });
        });
    }

    CheckPassword(password, user) {
        return new Promise((resolve, reject) => {

            bcrypt.compare(password, user.password_hash, function (err, result) {
                if (err) {

                    reject(err);
                    return;
                }

                resolve(result);
            });
        });
    }

    

    async UpdateUser(itm) {
        var item = await this.daoCtx.Get(Entities.User, { id: itm.id });

        itm.password_hash = await this.HashPassword(itm.password_hash);

        item = Object.assign(item, itm);

        await this.daoCtx.Update(item);

        return item;
    }

    async DeleteUser(item) {
        item = await this.daoCtx.Get(Entities.User, { id: item.id });
        await this.daoCtx.Delete(item);

        return true;
    }


}

//with serverless we need to use cache to prevent re-opening connection
let controller = global.controller;

if (!controller) {
    controller = new Controller(Dao);
    controller.Init();
}



// export default function reqAuth(handler){
//     return async (req, res) => {
//         try {
//             // global middleware
//             await jwtMiddleware(req, res);

//             // route handler
//             await handler(req, res);
//         } catch (err) {
//             // global error handler
//             errorHandler(err, res);
//         }
//     }
// }

module.exports = controller;