const express = require('express');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/get/values", (req, res, next) =>{
  let values = [
    {id: 1334,
    amount: 1000.00,
    description: 'this is awesome',
    type: 'income'},
    {id: 1334,
      amount: 1000.00,
      description: 'this is awesome',
      type: 'income'},
    {id: 1334,
      amount: 1000.00,
      description: 'this is awesome',
      type: 'expense'},
    {id: 1334,
      amount: 1000.00,
      description: 'this is awesome',
      type: 'expense'},
  ];
  res.status(200).json(values);
});

module.exports = app;
