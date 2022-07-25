const express = requiere("express");
const bodyParser = requiere("body-parser");
const request = requiere("request");

const app = express();

app.use(express.static(public));

// SERVER CONNECTION
app.listen(3000, function(){
    console.log("Server is running on port 3000...");
});

// GET REQUEST

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});



// POST REQUEST




