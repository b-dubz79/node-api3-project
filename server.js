const express = require('express');
const router = require('./users/userRouter');
const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

server.use('/api/users', logger, router);

// logger logs to the console the following information about each request: request method, request url, and a timestamp
// this middleware runs on every request made to the API

function logger(req, res, next) {
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`)
  next();
}


module.exports = server;
