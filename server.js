const express = require("express"); 
var request = require("request");
const app = express(); 
const port = process.env.PORT || 5000; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    var options = {
        method: "GET",
        url: "https://api.coinranking.com/v2/coins?limit=1",
        headers: {
            "x-access-token":
                "coinranking19759dda7c96a7c6de698bcf410c5fa15e5bb8840d065f46",
        },
    };
    request(options, function (error, response) {
        if (error) {
            res.status(400);
            res.send(error);
        }
        let data = {};
        try{
        data = JSON.parse(response.body);
        }
        catch(err){
            res.status(400);
            res.send(err.message);
        }
        data = { ...data, timestamp: Math.floor(new Date().getTime() / 1000) };
        res.send(data); //return timestamp for data as well
    });
}); 