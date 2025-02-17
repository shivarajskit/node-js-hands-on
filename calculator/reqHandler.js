const {sumReqHandler} = require('./sumReqHandler');

const reqHandler = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <html>
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h2>Welcome to calculator</h2>
                    <a href="/calculator">Go to calculator</a>
                </body>
                </html>
            `);
        res.end();
    } else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
            <head>
                <title>Submit Details</title>
            </head>
            <body>
                <h2>Enter Your Values</h2>
                <form action="/calculate-results" method="post">
                    <label for="fnum">First Num:</label>
                    <input type="text" id="fnum" name="fnum" required><br><br>
                    <label for="snum">Second Num:</label>
                    <input type="text" id="snum" name="snum" required><br><br>
                    <label>Gender:</label>
                    <button type="submit">Sum</button>
                </form>
            </body>
            </html>
        `);
        res.end();
    } else if (req.url === '/calculate-results' && req.method.toLowerCase() === 'post') {
        sumReqHandler(req, res);     
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <html>
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h2>404 Not Found</h2>
                    <a href="/">Go to Home</a>
                </body>
                </html>
            `);
        res.end();
    }
};

exports.reqHandler = reqHandler;