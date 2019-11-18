const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const budgetRouter = require('./routes/valueRoutes');
const TotalRouter = require('./routes/totalRoutes');

mongoose.connect("mongodb+srv://Charith:K7ulBusW5xqve3y0@cluster0-ow00d.mongodb.net/BudgetDB?retryWrites=true&w=majority", {useNewUrlParser: true,  useUnifiedTopology: true})
  .then(() => {
    console.log('connected successful');
  }).catch(() => {
    console.log('connection failed');
});

app.use(bodyParser.json());

// To allow cors for connections
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use(budgetRouter);
app.use(TotalRouter);
module.exports = app;
