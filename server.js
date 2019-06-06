const express = require("express");
const server = express();

server.use(express());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`<h2> TESTING IF SERVER IS LIVE! </h2>`);
});

// Define Routes

// Logger
function logger(req, res, next) {
  console.log(` [${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
