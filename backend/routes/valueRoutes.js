const express = require('express');
const router = express.Router();
const BudgetModel = require('../budgetvalue/budget');

// The Post request to get data from angular
router.post('/put/values', (req, res, next) =>{
  // let budgetValue = req.body;
  let budgetValue = new BudgetModel({
    amount: req.body.amount,
    description: req.body.description,
    type: req.body.type,
  });
  budgetValue.save().then((valuesEntered) =>{
    res.status(201).json({
      message: 'successfully added',
      id: valuesEntered._id
    });
  });
});

// K7ulBusW5xqve3y0
// Get to get the values to the front end
router.get("/get/values", (req, res, next) =>{
  BudgetModel.find()
    .then((documents) =>{
      res.status(200).json(documents);
    })

});

//Delete method to delete values
router.delete('/delete/value/:id', (req, res, next) => {
  BudgetModel.deleteOne({_id: req.params.id}).then((result) => {
    console.log(result);
    res.status(200).json({message: 'upload successful'});
  });

});

module.exports = router;
