const express = require("express");

const app = express();

const aboutRoute = (req, res, next) => {
  res.send("Howdy");
};
const aboutsRoute = (req, res, next) => {
  res.send("Hello");
};

app.use("/about/us", aboutsRoute);
app.use("/about", aboutRoute);

app.use("/", (req, res, next) => {
  res.send("<h1>Hello world<h1>");
});

app.listen(5001, () => {
  console.log("server running on port 5001");
});
