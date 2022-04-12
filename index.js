const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/datas", (req, res) => {
  res.json({
    name: "Mista Bu",
    wechat: 23423832,
  });
});

const port = process.env.PORT || 5000;

app.use(express.static("client/build"));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.all("*", (req, res, next) => {
  next(new Error("Bad API request!!!!"));
});

app.use((err, req, res, next) => {
  res.json({
    msg: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
