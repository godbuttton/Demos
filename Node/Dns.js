const dns=require('dns')
dns.lookup('www.baidu.com',(arr,address,family)=>{  //解析为IP地址
    console.log(address)
    console.log(family)
})
dns.resolve('www.baidu.com',(err,address)=>{ //解析成DNS记录数组
    console.log(address)

})