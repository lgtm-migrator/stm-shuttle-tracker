// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var fs = require("fs");
var cheerio = require("cheerio");
var snekfetch = require("snekfetch");

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/", (req, res) => {
  snekfetch.get("https://www.fanfiction.net/s/12954493").then(r => {
    var $ = cheerio.load(r.body);
    var chapters = $("#chap_select option");
    res.send((chapters.length / 2).toString());
  });
})