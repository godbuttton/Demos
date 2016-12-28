const qs=require('querystring');
var str="name=dda&age=18";
console.log(qs.parse(str));   //从查询字符串中解析数据对象参数为要解析插叙的字符串
var obj={
    name:'Jack',
    age:40,
    salary:1000
}
console.log(qs.stringify(obj,';'))