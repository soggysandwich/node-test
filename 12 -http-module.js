const http = require('http');

const server = http.createServer( (req,res)=>{

    if (req.url === '/'){
        res.end('Hello World to our homepage')
    }
    

   
    else if (req.url === '/about'){
        res.end('About us yeeehaaaa')
    }

    else res.end(`<h1> Ohhh Nooo</h1>`)


} );

server.listen(5000);