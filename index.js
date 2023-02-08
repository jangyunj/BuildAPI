const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

app.get("/", (req, res) => {
  res.json("Welcome!");
});

app.get("/news", (req, res) => {
  axios
    .get("https://www.cnn.com/2023/02/08/business/disney-earnings/index.html")
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $('a:contains("disney")', html).each(function () {})
    });
});
app.listen(PORT, () => console.log(`server running on ${PORT}`));
