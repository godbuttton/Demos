const url=require('url')/*
var u="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=add&oq=so&rsv_pq=9212ab6c0004d239&rsv_t=bc1bTGsRCRLkD28NnbEnnsLstfhyG0a9aSx7fp4jth7tjuqYPb%2Biv6O0F4Y&rqlang=cn&rsv_enter=0&inputT=3699&rsv_sug3=16&rsv_sug1=16&rsv_sug7=100&rsv_sug4=4418"
console.log(url.parse(u));
*/
var myurl={
    protocol:'http',
    host:'tmooc.cn',
    port:80,
    pathname:'/images/1.jpg',
    query:{name:'Mia',pwd:"25"}
}
console.log(url.format(myurl))