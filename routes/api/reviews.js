const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Review = require('../../models/Review');
const router = express.Router();


// reviews index
router.get('/:company_id', (req, res) => {
    Review.find({company: req.params.company_id})
        .sort({date: -1})
        .then(reviews => res.json(reviews))
        .catch(err => 
            res.status(404).json({ noreviewsfound: 'No reviews found from that company'}));
});

// create a review 
router.post('/:company_id', // what route to use here?
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newReview = new Review({
            company: req.params.company_id,
            body: req.body.body,
            user: req.user.id // how to get user id here?
        })        
        
        newReview.save().then(review => res.json(review));

})

module.exports = router;