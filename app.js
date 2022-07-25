const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

const API_KEY = "8c4e2691f33b030026813d8e83c2b86e-us8";
const LIST_ID = "7c4cf4a0d4"

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

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const emailAd = req.body.emailAddress;

    const data = {
        members: [
            {
                email_address: emailAd,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsondata = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/" + LIST_ID;
    const options = {
        method: "POST",
        auth: "glenn:" + API_KEY,
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsondata);
    request.end();
    
app.post("/failure", function(req,res){
    res.redirect("/");
})

});




