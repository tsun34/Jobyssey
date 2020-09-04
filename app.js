const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const jobs = require('./routes/api/jobs');
const companies = require('./routes/api/companies');
const reviews = require('./routes/api/reviews');
const bodyParser = require('body-parser');
const passport = require('passport');
// const seedC = require('./seed/company-seed');
// const seedJ= require('./seed/seed');
const app = express();

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}
// run seed functions here once
// seedC();
// seedJ();
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('yes its working'));
app.use('/api/users', users);
app.use('/api/jobs', jobs);
app.use('/api/companies', companies);
app.use('/api/reviews', reviews);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err));