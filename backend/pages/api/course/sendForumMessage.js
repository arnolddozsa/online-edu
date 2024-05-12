const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        var items = [];
        
        
        
        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code});
        
        if(req.user.isTeacher && course.createUserId.toString()    !== req.user._id.toString()){
            throw new Error("Nem a saját kurzusa. Nem írhat hozzá!")
        }

        var message = req.body.message;
        var forum = new Entities.Forum();
        forum.message = message;
        forum.courseId = course._id;
        forum.createUserId = req.user._id;

        delete forum._id;
        forum = await req.control.daoCtx.Add(forum);

        try {
            
            var forumElements = await req.control.daoCtx.GetList(Entities.Forum, {courseId: course._id});
        } catch (error) {
            throw new Error("Erre a kurzusra nem vagy felíratkozva");
            
        }



        res.status(200).json(forumElements);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}