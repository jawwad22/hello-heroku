const express = require('express');

var app = express();

app.set('port', process.env.PORT || 5000);

var port = app.get('port');

app.get('/', function (req, res) {
    res.send('hello world')
});
app.listen(port, () => {
    console.log(`Server running ${port}`);
});