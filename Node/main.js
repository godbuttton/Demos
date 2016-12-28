/*console.log(process.mainModule);
console.log(require.main);
console.log(module===process.mainModule)
var fs=require('fs');//引入文件系统模块
fs.readFile('./000.txt',(err,data)=>{
    console.log(data.toString());
});*/

//__dirname 当前模块文件目录
//__filename 当前文件目录文件
//module 当前模块引用
// module.exports 指向当前模块用待导出供其他模块使用的对象
// exports指向module.exports对象引用
// require引入其他模块的module.exports对象引用

// console.log(circle.dd.m);
var m=require("./01.js");  //
console.log(m.a.name);
console.log(m.a.b);//由于对象并不是作用域 所以不能形成引用关系