const fs = require('fs');
fs.writeFile('./file/01.txt','啊哈加卡',(err) => {
    if(err) return console.log('写入文件失败了' + err/message);
    console.log('写入文件成功了')
})