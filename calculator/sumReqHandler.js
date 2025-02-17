const sumReqHandler = (req, res) => {
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const jsonObj = Object.fromEntries(params);
        const sum = parseFloat(jsonObj.fnum) + parseFloat(jsonObj.snum);
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <html>
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h2>Your results!!! </h2>
                    <p>The sum is ${sum}</p>
                </body>
                </html>
            `);
        res.end();
    })
}

exports.sumReqHandler = sumReqHandler;