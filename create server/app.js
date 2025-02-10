const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); // to end event loop
});

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});