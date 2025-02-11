const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello World</title></head>');
    if (req.url === '/') {
        res.write('<body><h1>Home</h1></body>');
    } else if (req.url === '/products') {
        res.write('<body><h1>My Products</h1></body>');
    } else {
        res.write('<body><h1>First Node Test</h1></body>');
    }
    res.write('</html>');
    res.end();
    //process.exit(); // to end event loop
});

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});