import { ObjectId } from "mongodb";

const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        
        if(!req.isAuthenticated){
            throw new Error("Nincs bejelentkezve!");

        }
        var user = req.user;

        if(!user.isTeacher){
            throw new Error("Nem módosíthat kurzust");
        }
        
        var item = new Entities.Course();
        item = Object.assign(item, req.body);
        delete item._id;
        delete item.createUserId;
        var course = await req.control.daoCtx.Get(Entities.Course, {code: item.code});
        course = Object.assign(course, item);

        await req.control.daoCtx.Update(course);

        res.status(200).json(course);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}