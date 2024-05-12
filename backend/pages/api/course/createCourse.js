const Entities = require("../../../Entities.js");

export default async function handler(req, res){
    
    try {
        
        
        var item = new Entities.Course();
        item = Object.assign(item, req.body);
        if(!req.isAuthenticated){
            throw new Error("Nincs bejelentkezve!");

        }
        var user = req.user;

        if(!user.isTeacher){
            throw new Error("Nem hozhat létre kurzust");
        }


        delete item._id;

        function generateUrl(length){
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let randomId = '';
          
            for (let i = 0; i < length; i++) {
              randomId += characters.charAt(Math.floor(Math.random() * characters.length));
            }
          
            return randomId;
        }

        item.code = generateUrl(16);
        item.createUserId = req.user._id;

        item = await req.control.daoCtx.Add(item);

        res.status(200).json(item);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }


}