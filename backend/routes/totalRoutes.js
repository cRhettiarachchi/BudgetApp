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

routes.get('/total/get/:id', (req, res, next) => {
  console.log('the get total method called and id is : ' + req.params.id);
    Total.findOne({_id: req.params.id}).then((total)=>{
      console.log('total get method called ' + total.total);
      res.status(200).json(total);
    })
});

routes.patch('/total/put/:id', (req, res, next) => {

  const tot = new Total({
    total: req.body.total
  });
  Total.updateOne({_id: req.params.id}, {total: req.body.total}).then(value => {
    res.json({
      message: 'update Done'
    });
  }).catch(message => {
    console.log(message);
  })
});

module.exports = routes;
