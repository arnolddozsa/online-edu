const Entities = require("../../../Entities.js");

const jwt = require('jsonwebtoken');
export default async function handler(req, res) {
    var userJwt = jwt.verify(req.cookies.jwt, process.env.ACCESS_TOKEN_SECRET);
    
    
    res.cookie("jwt", "", {
        secure: true
        //, httpOnly: true
    })

    res.json(true);


}