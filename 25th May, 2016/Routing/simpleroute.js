/**
 * Created by pradeep on 25/5/16.
 */
var express = require('express');
var app = express();
app.get("/about",function(req,res){
        console.log("Hello");
    res.send("Hello World");
}
);
app.listen(8081);
