/**
 * Created by pradeep on 25/5/16.
 */
var express = require("express");
var app = express();
app.get("/user",function(req,res,next){
    console.log("This is A Handler pass to the next ");

    next();
        //res.send("This is A");
},
    function(req, res){
        res.send("This is B");
    });
app.listen(8089);