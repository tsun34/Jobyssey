const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const app = express();
const port = process.env.PORT || 5000;

mongoose
    .connect(db, {userNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, () => console.log(`Server is running on port ${port}`));
