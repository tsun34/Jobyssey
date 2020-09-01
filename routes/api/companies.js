const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Company = require('../../models/Company');

const router = express.Router();

// Company: [index, show]
    
router.get('/companies', (req, res) => {
    Company.find()
        .sort({date: -1})
        .then(companies => res.json(companies))
        .catch(err => 
            res.status(404).json({ nocompaniesfound: 'No companies found'}));
});

router.get('/company/:company_id', (req, res) => {
    Company.findById(req.params.company_id)
        .then(company => res.json(company))
        .catch(err => 
            res.status(404).json({ nocompanyfound: 'No company found with that id'}));
});

module.exports = router;

