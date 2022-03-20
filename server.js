const express = require("express");
var request = require("request");
const app = express();
const port = process.env.PORT || 5000;
var testingJSON = require("./test.json");
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get("/testing", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Content-Type", "application/json");
    let data = testingJSON;
    data = { ...data, timestamp: Math.floor(new Date().getTime() / 1000) };
    res.send(data); //return timestamp for data as well
});

app.get("/data", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    var options = {
        method: "GET",
        url: "https://api.coinranking.com/v2/coins?limit=100",
        headers: {
            "x-access-token":
                "xxxxxxxxxxxxxxxxxx",
        },
    };
    request(options, function (error, response) {
        if (error) {
            res.status(400);
            res.send(error);
        }
        let data = {};
        try {
            data = JSON.parse(response.body);
        } catch (err) {
            res.status(400);
            res.send(err.message);
        }
        data = { ...data, timestamp: Math.floor(new Date().getTime() / 1000) };
        res.send(data); //return timestamp for data as well
    });
});
