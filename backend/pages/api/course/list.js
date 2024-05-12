const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        var items = [];
        if(req.user && req.user.isTeacher){
            items = await req.control.daoCtx.GetList(Entities.Course, {createUserId: req.user._id});
        } else {
            var items = await req.control.daoCtx.GetList(Entities.Course, {});

            // for(var o of it){

            //     try {
                    
            //         await req.control.daoCtx.Get(Entities.Course_Subscription, {courseId: o._id, createUserId: req.user._id});

            //     } catch (error) {
                    // items.push(o);
                // }
            // }
        }


        res.status(200).json(items);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}