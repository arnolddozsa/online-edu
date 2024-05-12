import { ObjectId } from "mongodb";

const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        
        if(!req.user.isTeacher){
            throw new Error("Diák nem módosíthat kurzust");
        }

        

        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code, createUserId: req.user._id});

        res.status(200).json(course);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}