const Entities = require("../../../Entities.js");

const jwt = require('jsonwebtoken');
export default async function handler(req, res){
    var { email, password } = req.body;

        try {
            
            try {
                
                var user = await req.control.daoCtx.Get(Entities.User, { email: email });
            } catch (error) {
                res.statusCode = 401;
                throw new Error("Helytelen felhasználónév vagy jelszó");
            }
            
            var success = await req.control.CheckPassword(password, user);

        if (!success) {
            res.statusCode = 401;
            throw new Error("Helytelen felhasználónév vagy jelszó");
        }

        //skip user password from return
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
        });



        res.json(user);
        } catch (error) {
            res.json({message: error.message});
        }


}