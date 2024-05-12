import { ObjectId } from "mongodb";

const Entities = require("../../../../Entities.js");

export default async function handler(req, res){
    
    try {
        
        if(req.user.isTeacher){
            throw new Error("Tanár nem íratkozhat fel kurzusra")
        }

        

        var subscription = await req.control.daoCtx.Get(Entities.Course_Subscription, {createUserId: req.user._id, _id: new ObjectId(req.body.subscription._id)});
        subscription.answers = req.body.subscription.answers;
        await req.control.daoCtx.Update(subscription);


        res.status(200).json( subscription);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}