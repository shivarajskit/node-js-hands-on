const fs = require('fs');
const data = 'Sample text to write in file using modejs fs module';
fs.writeFile('output.txt', data, (err)=> { 
    if (err) throw err;
    console.log(err);
});