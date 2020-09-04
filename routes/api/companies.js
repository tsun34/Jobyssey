const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Company = require('../../models/Company');

const router = express.Router();

// Company: [index, show]
    
router.get('/', (req, res) => {
    Company.find()
        .sort({date: -1})
        .then(companies => res.json(companies))
        .catch(err => 
            res.status(404).json({ nocompaniesfound: 'No companies found'}));
});

router.get('/:company_id', (req, res) => {
    Company.findById(req.params.company_id)
        .then(company => res.json(company))
        .catch(err => 
            res.status(404).json({ nocompanyfound: 'No company found with that id'}));
});

router.post('/companies',
    (req, res) => {
        const newCompany = new Company({
            name: req.body.name,
            description: req.body.description
        })        
        newCompany.save().then(Company => res.json(Company));
})

router.post('/search-companies', (req, res) => {
    let companyName = new RegExp("^"+req.body.query)
    Company.find({name: { $regex:companyName, $options: 'i' }})
    .then(company => {
        res.json(company)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;