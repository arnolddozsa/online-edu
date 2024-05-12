const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        var items = [];
        if(req.user.isTeacher){
            throw new Error("Tanár nem íratkozhat fel kurzusra")
        }

        

        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code});
        try {
            
            var subscription = await req.control.daoCtx.Get(Entities.Course_Subscription, {courseId: course._id, createUserId: req.user._id});
        } catch (error) {
            throw new Error("Erre a kurzusra nem vagy felíratkozva");
            
        }



        res.status(200).json({course: course, subscription: subscription});
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}