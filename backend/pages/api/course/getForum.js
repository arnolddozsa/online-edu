const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        
        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code});
        try {
            
            var forumElements = await req.control.daoCtx.GetList(Entities.Forum, {courseId: course._id});
        } catch (error) {
           // throw new Error("Erre a kurzusra nem vagy felíratkozva");
            
        }



        res.status(200).json({course: course, forum: forumElements});
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}