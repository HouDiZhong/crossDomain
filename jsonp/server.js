let express = require('express');

let app = express();

app.get('/say',(req,res) => {
    let {wd,cd} = req.query;
    res.end(`${cd}('你说的啥')`)
})

app.listen(3000);

