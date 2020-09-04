const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Job = require('../../models/Job');
const validateJobInput = require('../../validation/jobs');

const router = express.Router();


//get all jobs for user (index)
router.get('/user/:user_id', (req, res) => {
    Job.find({user: req.params.user_id})
        .sort({date: -1}) // sort by differnt date param for differnt stage
        .then(jobs => res.json(jobs)) 
        .catch(err => 
            res.status(404).json({ nojobsfound: 'No jobs found from that user'}));
});


//get info for one specific job (show)
router.get('/:id', (req, res) => {
    Job.findById(req.params.id)
        .then(job => res.json(job))
        .catch(err =>
            res.status(404).json({ nojobfound: 'No job found with that ID' })
        );
});

//create a job (create)
router.post('/', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const {errors, isValid} = validateJobInput(req.body);
        
        if (!isValid){
            return res.status(400).json(errors);
        }
        const newJob = new Job({
            user: req.user.id,
            company_name: req.body.company_name,
            position_name: req.body.position_name,
            stage: req.body.stage,
            application_link: req.body.application_link,
            salary: req.body.salary,
            location: req.body.location,
            deadline: req.body.deadline,
            date_applied: req.body.date_applied,
            interview_date: req.body.interview_date,
            decision_date: req.body.decision_date,
            decision: req.body.decision,
            notes: req.body.notes,
            networking_contacts: req.body.networking_contacts,
            studying_preparation: req.body.studying_preparation
        });

        newJob.save().then(job => res.json(job)).catch(err => {
            console.log(err);
            res.status(500);
        });
    }    
);

//update a job info (update)
router.post('/update/:id', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Job.findById(req.params.id)
        .then(job => {
            job.company_name = req.body.company_name;
            job.position_name = req.body.position_name;
            job.stage = req.body.stage;
            job.application_link = req.body.application_link;
            job.salary = req.body.salary;
            job.location = req.body.location;
            job.deadline = req.body.deadline;
            job.date_applied = req.body.date_applied;
            job.interview_date = req.body.interview_date;
            job.decision_date = req.body.decision_date;
            job.decision = req.body.decision;
            job.notes = req.body.notes;
            job.networking_contacts = req.body.networking_contacts;
            job.studying_preparation = req.body.studying_preparation

            job.save()
                .then(() => res.json('Job updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
})

//delete a job info (delete)
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Job.findByIdAndDelete(req.params.id)
            .then(() => res.json('Job deleted.'))
            .catch(err => res.status(400).json('Eror: '+err));
})

module.exports = router;