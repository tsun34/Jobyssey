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
router.post('/:company_id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newReview = new Review({
            company: req.params.company_id,
            body: req.body.body,
            user: req.user.id 
        })        
        
        newReview.save().then(review => res.json(review));

})

// edit a review
router.post('/update/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Review.findById(req.params.id)
        .then(review => {
            review.body = req.body.body;
          
            review.save()
                .then(() => res.json('Review updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
})

//delete a review info (delete)
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Review.findByIdAndDelete(req.params.id)
            .then(() => res.json('Review deleted.'))
            .catch(err => res.status(400).json('Eror: '+err));
})

module.exports = router;