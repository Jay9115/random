// const http = require("http");
// const fs = require('fs');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 3000;

// const home_html = fs.readFileSync("index.html");
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     let a = req.url;
//     let file = a.substring(1);
//     if (req.url === "/") {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(home_html);
//     }
//     else if (req.url.endsWith('.css')) {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/css');
//         res.end(fs.readFileSync(file));
//     }

//     else if (req.url.endsWith('.html')) {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(fs.readFileSync(file));
//     }

//     else if (req.url.endsWith('.js')) {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/js');
//         res.end(fs.readFileSync(file));
//     }
//     else {
//         res.statusCode = 404;
//         res.end("File not found");
//     }
// });

// server.listen(port, hostname, () => {
//     // console.log("Hello world");
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express=require('express');
const app = express();

const port=3000;

app.get("/",(req,res)=>{
    res.send("This is first web app using express");
    // res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    res.send("This is post first web app using express");
    // res.sendFile(__dirname+"/index.html");
});
app.get("/index.css",(req,res)=>{
    // res.sendFile(__dirname+"/index.css");
    
})

app.listen(port,()=>{
console.log(`Appliction started sucesfully on ${port}`);  
});
