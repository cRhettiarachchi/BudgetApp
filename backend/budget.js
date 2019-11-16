const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const BudgetModel = require('./budgetvalue/budget');

mongoose.connect("mongodb+srv://Charith:K7ulBusW5xqve3y0@cluster0-ow00d.mongodb.net/BudgetDB?retryWrites=true&w=majority", {useNewUrlParser: true,  useUnifiedTopology: true})
  .then(() => {
    console.log('connected successful');
  }).catch(() => {
    console.log('connection failed');
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});


app.post('/put/values', (req, res, next) =>{
  // let budgetValue = req.body;
  let budgetValue = new BudgetModel({
    amount: req.body.amount,
    description: req.body.description,
    type: req.body.type
  });
  budgetValue.save();
  res.status(201).json({
    message: 'successfully added'
  });
});

// K7ulBusW5xqve3y0

app.get("/get/values", (req, res, next) =>{
  BudgetModel.find()
    .then((documents) =>{
      res.status(200).json(documents);
    })

});

module.exports = app;
