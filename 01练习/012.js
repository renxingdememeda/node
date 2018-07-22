const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'./file/01.txt'),'utf8',(err,data) => {
    if(err) return console.log('读取失败');
    console.log(data);
})