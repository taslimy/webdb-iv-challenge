const express = require("express");
const server = express();

server.use(express());
server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2> TESTING IF SERVER IS LIVE! </h2>`);
});

// Define Routes
server.use("/api/dishes", require("./routes/dishes-router"));
server.use("/api/recipes", require('./routes/recipes-router'));

// Logger
function logger(req, res, next) {
  console.log(` [${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
