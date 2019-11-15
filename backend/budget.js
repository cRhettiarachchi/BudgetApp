const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});


app.post('/put/values', (req, res, next) =>{
  let budgetValue = req.body;
  console.log(budgetValue);
  res.status(201).json({
    message: 'successfully added'
  });
});

app.get("/get/values", (req, res, next) =>{
  console.log('this method is called');
  let values = [
    {id: 1334,
    amount: 1000.00,
    description: 'income 1',
    type: 'income'},
    {id: 1334,
      amount: 1000.00,
      description: 'income 2',
      type: 'income'},
    {id: 1334,
      amount: 1000.00,
      description: 'exp 1',
      type: 'expense'},
    {id: 1334,
      amount: 1000.00,
      description: 'exp 2',
      type: 'expense'},
  ];
  res.status(200).json(values);
});

module.exports = app;
