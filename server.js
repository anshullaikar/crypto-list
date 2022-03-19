const express = require("express"); //Line 1
var request = require("request");
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/express_backend", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    var options = {
        method: "GET",
        url: "https://api.coinranking.com/v2/coins?limit=100",
        headers: {
            "x-access-token":
                "coinranking19759dda7c96a7c6de698bcf410c5fa15e5bb8840d065f46",
        },
    };
    request(options, function (error, response) {
        if (error) res.send(error);
        res.send(response.body);
    });
}); //Line 11
