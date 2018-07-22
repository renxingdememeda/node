const fs = require('fs');
fs.copyFile('./file/01.txt','./file/1 - copy.txt',(err) => {
    if(err) throw err;
    console.log('文件复制成功')
})