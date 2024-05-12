const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        

        if(req.user.isTeacher){
            throw new Error("Tanár nem íratkozhat fel kurzusra")
        }

        

        var course = await req.control.daoCtx.Get(Entities.Course, {code: req.body.code});
        try {
            
            var subscription = await req.control.daoCtx.Get(Entities.Course_Subscription, {courseId: course._id, createUserId: req.user._id});
        } catch (error) {
            throw new Error("Erre a kurzusra nem vagy felíratkozva");
            
        }

        if(req.body.page > subscription.progress + 1){
            throw new Error("Lassíts csak sorban haladhatsz az anyaggal");
        }

        if(req.body.page == subscription.progress + 1){

            subscription.progress++;
            await req.control.daoCtx.Update(subscription);
        }


        res.status(200).json(course);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}