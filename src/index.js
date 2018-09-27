var express = require('express');
var open = require('open');
var path = require('path');

const app = express();
const port = 4567;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) console.log(err);
    else open('http://localhost:' + port);
});