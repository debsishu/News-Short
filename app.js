const express = require("express");
const api = require("./apiCall.js");

var port = process.env.PORT || 3000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  var x = await api.getApiData();
  res.render("index", { data: x.data.trending_tags });
});

app.get("/categories/:id", async (req, res) => {
  var data = await api.getApiData(req.params.id);
  res.render("read", {
    data: data.data.news_list,
    category: req.params.id,
    pageNum: data.page_num,
  });
});

app.get("/categories/:id/page=:num", async (req, res) => {
  var data = await api.getApiData(req.params.id + "/?page=" + req.params.num);
  res.render("read", {
    data: data.data.news_list,
    category: req.params.id,
    pageNum: data.data.page_num,
  });
});

app.listen(port, () => console.log(`Server started at port ${port}`));
