

const express = require('express');

const Student = require('./models/student');

const db = require('./db');

const app = express();

app.post('/students', async (req, res) => {

  const { name, age, major, courses } = req.body;

  const student = new Student({ name, age, major, courses });

  await student.save();

  res.json(student);

});

app.listen(3000, () => {

  console.log('Server started on port 3000');

});