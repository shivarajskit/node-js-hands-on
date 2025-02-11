const http = require('http');

const server = http.createServer((req, res) => {
    const path = req.url.toLowerCase().replace(/\/$/, ''); // Normalize URL

    if (path === '' || path === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
            <head><title>Navigation</title></head>
            <body>
                <h2>Navigation Links</h2>
                <nav>
                    <a href="/home">Home</a> | 
                    <a href="/men">Men</a> | 
                    <a href="/women">Women</a> | 
                    <a href="/kids">Kids</a> | 
                    <a href="/cart">Cart</a>
                </nav>
            </body>
            </html>
        `);
        res.end();
    } else if (path === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Home Page</h2><p>Status: You are on the Home page.</p>');
    } else if (path === '/men') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Men\'s Section</h2><p>Status: Browse our collection for men.</p>');
    } else if (path === '/women') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Women\'s Section</h2><p>Status: Explore the latest in women\'s fashion.</p>');
    } else if (path === '/kids') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Kids\' Section</h2><p>Status: Find great outfits for kids.</p>');
    } else if (path === '/cart') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Shopping Cart</h2><p>Status: View items in your cart.</p>');
    } else if (path === '/favicon.ico') {
        res.writeHead(204); // No content for favicon requests
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h2>404 - Page Not Found</h2>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
