const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        
        
        var item = new Entities.User();
        item = Object.assign(item, req.body);
        var user = undefined;
        try {
            user = await req.control.daoCtx.Get(Entities.User, {email: item.email});    
        } catch (error) {
            console.log(error);
        }
        if(user){
            throw new Error("Már létezik ez a felhasználó");
        }


        delete item._id;

        item.password_hash = await req.control.HashPassword(item.password);
        delete item.password;

        await req.control.daoCtx.Add(item);

        delete item.password_hash;

        res.status(200).json(item);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}