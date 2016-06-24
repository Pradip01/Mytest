/**
 * Created by pradeep on 25/5/16.
 */
var express = require("express");
var app = express();

var myLogger = function(req,res,next){
    console.log("logged");
    next();
};
app.use(myLogger);

app.get("/",function(req,res){
   res.send("Hello World");
});
app.listen(3000);