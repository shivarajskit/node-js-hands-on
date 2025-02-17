const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit-details') {
        // Handle form submission
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        req.on('end', () => {
           const parsedBody = Buffer.concat(body).toString();
           console.log('Parsed body!!!! ', parsedBody);
           const params = new URLSearchParams(parsedBody);
           console.log(params);
        //    const jsonObject = {};
        //    for (const [key, val] of params.entries()) {
        //     jsonObject[key] = val;
        //    }
            const jsonObject = Object.fromEntries(params); // one liner of above commented code
           console.log(jsonObject);
           // This is a synchronous blocking code
            fs.writeFileSync('user-input.txt', JSON.stringify(jsonObject));
            // This is an asynchronous code
            fs.writeFile('user-input.txt', JSON.stringify(jsonObject), error => {
                console.log('Data written successfully');
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        })


    } else {
        
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
            <head>
                <title>Submit Details</title>
            </head>
            <body>
                <h2>Enter Your Details</h2>
                <form action="/submit-details" method="post">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required><br><br>

                    <label>Gender:</label>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female">
                    <label for="female">Female</label><br><br>

                    <button type="submit">Submit</button>
                </form>
            </body>
            </html>
        `);
    res.end();
    }
    //process.exit(); // to end event loop
});

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
});