const express = require('express');
const routes = express.Router();
const Total = require('../budgetvalue/total');

routes.post('/total/post', (req, res, next) =>{
  // let budgetValue = req.body;
  console.log('this post total method called');
  let totVal = new Total({
    total: req.body.total
  });
  totVal.save().then((valuesEntered) =>{
    console.log(valuesEntered._id);
    res.status(201).json({
      message: 'successfully added',
      id: valuesEntered._id
    });
  });
});

routes.get('/total/get', (req, res, next) => {
    Total.find().then((total)=>{
      console.log('total get method called ' + total.total);
      res.status(200).json(total);
    })
});

routes.put('/total/put/:id', (req, res, next) => {
  const tot = new Total({
    total: req.body.total
  });
  Total.updateOne({_id: req.params.id}, tot).then(value => {
    res.json({
      message: 'update Done'
    });
  })
});

module.exports = routes;
