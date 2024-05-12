const express = require("express");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const http = require("http");
const next = require("next");

const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
const cors = require("cors");

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const cont = require("./control.js");



nextApp.prepare().then(async() => {
    const app = express();
    app.use(cors({
        origin: [/(http|https)\:\/\/.*/],
        credentials: true
    }));
    app.use(cookieParser());
    app.use(session({
        secret: "thisismysecrctekeyfhasdfarjiob7fwir767",
        saveUninitialized:true,
        resave: false 
    }));

    app.use(express.json());
    app.use(upload.array('files[]', 10));
    app.use(async function (req, res, next) {
        req.db = cont.daoCtx;
        req.control = cont;
        try {
            req.user = await req.control.CheckAccessCore(req, res);
            req.isAuthenticated = true;
            
        } catch (error) {
            
        }
        next()
    });
    const server = http.createServer(app);
    
    app.post('*', (req, res) => nextHandler(req, res));
    // app.options('*', (req, res, next) => {
    //     res.setHeader("Access-Control-Allow-Credentials", "true");
    //     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
    //     res.statusCode(200);
    //     res.send();
    //     next();
    // });


    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});