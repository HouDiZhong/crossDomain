const express = require('express');
const app = express();
let whitList = ['http://localhost:3000'];

app.use((req,res,next) => {
    let origin = req.headers.origin;
    if(whitList.includes(origin)) {
        // 设置那个域可以访问  *号是全部可以访问
        res.setHeader('Access-Control-Allow-Origin',origin);
        // 设置请求头
        res.setHeader('Access-Control-Allow-Headers','name');
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true);
        // 返回的header里面的name是好使的
        res.setHeader('Access-Control-Expose-Headers','name');
        // 设置请求方法
        res.setHeader('Access-Control-Allow-Methods','PUT');
        /*
         * 表示预检请求结果可以缓存多久， 单位是秒
         * Firefox中，上限是24小时 （即86400秒）
         * Chromium 中则是10分钟（即600秒）默认值 5 秒
         * 值为 -1，则表示禁用缓存
        */
        res.setHeader('Access-Control-Max-Age',10);
        /* if(req.method === 'OPTIONS'){
            res.end();
        } */
    };
    next();
})

app.get('/getData',(req,res) => {
    res.send('get 方法')
})
app.put('/getData',(req,res) => {
    res.setHeader('name','hzx');
    res.send('put 方法')
})

app.listen(4000);
