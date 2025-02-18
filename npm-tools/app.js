const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});