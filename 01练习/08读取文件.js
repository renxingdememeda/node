const fs = require('fs');
fs.readFile('./file/01.txt','utf-8',(err,data) => {
    if(err) return console.log(err.message);
    console.log(data);
})