const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Student = require('./routes/student.route')

const app = express();

mongoose.connect("mongodb://localhost/studentsDb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the Database');
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/students', Student);

app.listen(3000, () => {
    console.log("Server running fine at 3000")
})
