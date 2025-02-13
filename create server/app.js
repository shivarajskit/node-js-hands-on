const http = require('http');
const userRequestHandler = require('./user');

const server = http.createServer(userRequestHandler);

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});