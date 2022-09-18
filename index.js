//Requiring the module
const http = require('http');

//creating server object
const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === '/'){
        res.write('<html>');
        res.write(
            '<head><title>Learn NodeJs</title></head>'
        );
        res.write(
            '<body><h2>Hello from node js server. home page</h2></body>'
        );
        res.write('</html>');
        return res.end();
    }

    if( url=== '/about'){
        res.write('<html>');
        res.write(
            '<head><title>Geekforgeeks</title></head>'
        );
        res.write(
            '<body><h2>Node js - about page</h2></body>'
        )
        res.write('</html>');
        return res.end();
    }
});

//server setup
server.listen(5000, ()=>{
    console.log("Node js server is runnning.");
})