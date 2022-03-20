const express = require("express");
var request = require("request");
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

let testingJSON = {
    status: "success",
    data: {
        stats: {
            total: 13440,
            totalCoins: 13440,
            totalMarkets: 25600,
            totalExchanges: 181,
            totalMarketCap: "1943729348774",
            total24hVolume: "63970027131",
        },
        coins: [
            {
                uuid: "Qwsogvtv82FCd",
                symbol: "BTC",
                name: "Bitcoin",
                color: "#f7931A",
                iconUrl:
                    "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
                marketCap: "780363078060",
                price: "41095.45302693861",
                listedAt: 1330214400,
                tier: 1,
                change: "-1.62",
                rank: 1,
                sparkline: [
                    "41770.6099172820994591820000",
                    "41928.2939735507508148480000",
                    "42052.9228483075954940520000",
                    "42205.2421795762391635870000",
                    "41771.9490304678094691200000",
                    "41975.8922488278138805750000",
                    "42103.1339181430130466040000",
                    "41923.5090416966424960020000",
                    "41835.6808356444327981430000",
                    "41699.4611943659461595490000",
                    "41834.4409053541475982000000",
                    "41693.0740240396908166310000",
                    "41876.7984519208503586060000",
                    "41914.3242967481107119390000",
                    "41851.9407166955494801990000",
                    "41842.7209078677568921370000",
                    "41757.4535187919649289140000",
                    "41742.4278792355294576190000",
                    "41663.1728185050315513480000",
                    "41604.9455749112368797740000",
                    "41373.9243575484754763540000",
                    "41462.0961191372313873790000",
                    "41420.9082406217588683030000",
                    "41411.6156908200132681680000",
                    "41178.4391340652947909100000",
                    "41114.6191827431195855060000",
                    "41095.4530269386078414110000",
                ],
                lowVolume: false,
                coinrankingUrl:
                    "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
                "24hVolume": "18207659941",
                btcPrice: "1",
            },
        ],
    },
};

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
