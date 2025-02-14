const http = require('http');
const { reqHandler } = require('./reqHandler');

const server = http.createServer(reqHandler);

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});