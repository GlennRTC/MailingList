const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// SERVER CONNECTION
app.listen(3000, function(){
    console.log("Server is running on port 3000...");
});

// GET REQUEST

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

// POST REQUEST

app.post("/", function(req,res){

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var emailAd = req.body.emailAddress;

    console.log(firstName, lastName, emailAd);


});




