const Entities = require("../../../Entities.js");

const jwt = require('jsonwebtoken');
export default async function handler(req, res){
    
    try {
        
        if(!req.isAuthenticated){
            throw new Error("Nincs bejelentkezve!");

        }
        
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500);
        res.json({message: error.message});
    }

}