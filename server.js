const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const friends = ["Bryce", "Alex", "Zain", "Fahar", "Christian"];
const port = 4000;
app.listen(port, function(){console.log("server running on " + port)});

app.get("/api/users", function(req, res){
    res.status(200).send(friends); //send the array friends to the .then() in index.js
})

app.get("http://api.openweathermap.org/data/2.5/weather/", function(req, res){
    if(req.query.q){
    console.log(res.query.q.temp);
    res.status(200).send(req.query.q);
    }
})

app.get("/weather/:temp", function(req, res){
    console.log(req.params.temp);
    if(req.params.temp > 89)
    {
        res.status(200).send("It is hot!");
    }
    else if(req.params.temp > 59)
    {
        res.status(200).send("It is nice");
    }
    else if(req.params.temp < 60)
    {
        res.status(200).send("It is cold");
    }
    else{
        res.status(200).send("Invalid Input");
    }
})

