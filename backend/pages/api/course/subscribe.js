const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        var items = [];
        if(req.user.isTeacher){
            throw new Error("Tanár nem íratkozhat fel kurzusra")
        }

        

        var course = await req.control.daoCtx.Get(Entities.Course, req.body);
        var found = false;
        try {
            
            await req.control.daoCtx.Get(Entities.Course_Subscription, {courseId: course._id, createUserId: req.user._id});
            found = true;
        } catch (error) {
            
        }

        if(found){
            throw new Error("Már fel vagy íratkozva erre a kurzusra");
        }

        var item = new Entities.Course_Subscription();
        item.courseId = course._id;
        item.createUserId = req.user._id;
        delete item._id;

        item = await req.control.daoCtx.Add(item);


        res.status(200).json(item);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}