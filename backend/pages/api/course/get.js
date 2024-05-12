const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {

        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code});
        
        res.status(200).json(course);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}