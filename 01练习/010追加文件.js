const fs = require('fs');
fs.appendFile('./file/01.txt','往往会问我鸡尾酒',(err) =>{
    if(err) throw err;
    console.log('文件追加成功');
})