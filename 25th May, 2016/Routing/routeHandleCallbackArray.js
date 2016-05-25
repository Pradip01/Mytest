/**
 * Created by pradeep on 25/5/16.
 */
var express = require("express");
var app = express();
app.get("/",[cb0,cb1,cb2]);

 function cb0(req,res,next){
    console.log("This is CB0");
     next();
}

    function cb1(req,res,next){
        console.log("This is CB1");
        next();
    }

    function cb2(req,res){
        console.log("this is CB2");
        res.send("Hello CB2");
    }
app.listen(8081);