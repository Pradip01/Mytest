/**
 * Created by pradeep on 25/5/16.
 */
var express = require('express');
var app = express();
app.get('/',function (req, res) {
    res.send('Hi about');
});
//app.listen(8081);
app.listen(8081);