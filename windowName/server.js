const express = require('express');

const a = express();
const b = express();
a.use(express.static(__dirname));
b.use(express.static(__dirname));
a.listen(3000);
b.listen(4000);