const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const jobs = require('./routes/api/jobs');
const companies = require('./routes/api/companies');
const reviews = require('./routes/api/reviews');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err));


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);
app.use('/api/jobs', jobs);
app.use('/api/companies', companies);
app.use('/api/reviews', reviews);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));