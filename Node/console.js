const c = require("console")
const fs = require('fs')
var out = fs.createWriteStream('./log/out.log');
var err = fs.createWriteStream('./log/err.log');
var logger = new c.Console(out, err)
    //logger.out("我的读写操作")
    // logger.error('my error text...')
fs.readFile('./000.txt', (err, data) => {
    if (err) {
        logger.error(err);
    }else{
        logger.log(data.toString())
    }
})



