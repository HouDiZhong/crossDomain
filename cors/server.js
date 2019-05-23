const express = require('express');
const app = express();
// 使用中间间
app.use(express.static(__dirname));
// 监听端口
app.listen('3000');