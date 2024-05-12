import { ObjectId } from "mongodb";

const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        
        
        var item = new Entities.Course();
        item = Object.assign(item, req.body);
        if(!req.isAuthenticated){
            throw new Error("Nincs bejelentkezve!");

        }
        var user = req.user;

        if(!user.isTeacher){
            throw new Error("Nem törölhet kurzust");
        }

        item._id = new ObjectId(item._id);

        item = await req.control.daoCtx.Delete(item);

        res.status(200).json(item);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}