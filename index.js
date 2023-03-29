const express = require("express");

const app = express();
const router = require("./routes/routes");

app.use("/", router);

app.listen(5001, () => {
  console.log("server running on port 5001");
});
