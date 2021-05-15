const fetch = require("node-fetch");

require('dotenv').config();

var api = process.env.API_KEY;

async function getApiData(s = "") {
  const data = await fetch(api + s);
  var json = await data.json();
  return json;
}

module.exports.getApiData = getApiData;
