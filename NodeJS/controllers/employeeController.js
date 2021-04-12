
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var Employee = require('../models/employees');
//var id =  Employee;
//localhost:3000/employee/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err){res.send(docs);}
        else {console.log('error in retraiving Employees');}
    });
  
});

router.get('/', (req, res) => {
if (!ObjectId.isValid(req.param.id))
return res.status(400).send('no record with given id');

Employee.findById(req.params.id, (err, doc) => {
    if (err){res.send(doc);}
    else {console.log('error in retraiving employee');}
});
});

router.post('/', (req, res) => {
    var emp = new Employee({
name: req.body.name,
position: req.body.position,
office: req.body.office,

    });
    emp.save((err, doc) => {
        console.log(doc);
        if (!err) { res.send(doc);}
        else {console.log('error in employee save')}
    });
});

router.put('/:_id',(req, res) => {

var emp = {
name: req.body.name,
position: req.body.position,
office: req.body.office
};

Employee.findByIdAndUpdate(req.params._id, {$set: emp }, {new: true}, (err, doc) => {
    console.log(doc);
    if(!err)
res.send(doc);
else
console.log("error in updation")
});
});


router.delete('/:_id', (req, res) => {
    Employee.findByIdAndRemove(req.params._id, (err, doc) => {
        console.log(doc);
        if (!err) { res.send(doc);}
        else {console.log('error in employee Delete');}
    });
});


module.exports =  router;
