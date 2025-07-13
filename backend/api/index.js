const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API root is working" });
});

module.exports = serverless(app);
