//requiring module
const express = require('express');
const app = express();

//handling '/' request
app.get('/', (req, res)=> {
    res.send('<h2>Home page</h2>')
});

app.get('/about', (req,res)=>{
    res.send('<h2>About Page</h2>')
});

//server setup
app.listen(5000, ()=>{
   console.log("server is reunning -express js");
});