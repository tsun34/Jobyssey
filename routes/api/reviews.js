const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Review = require('../../models/Review');
const router = express.Router();


// reviews index
router.get('/company/:company_id', (req, res) => {
    Review.find({reviews: req.params.company_id})
        .sort({date: -1})
        .then(reviews => res.json(reviews))
        .catch(err => 
            res.status(404).json({ noreviewsfound: 'No reviews found from that company'}));
});

// create a review 
router.post('/review/:company_id', // what route to use here?
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Review.findById(req.params.id)
        .then(review => {
            review.company = req.body.company;
            review.body = req.body.body;
            review.user = req.body.user_id; // how to get user id here?
    
            review.save()
                .then(() => res.json('Review updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;