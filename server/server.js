const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { json } = require('body-parser');
const { DH_NOT_SUITABLE_GENERATOR } = require('constants');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/db', (req, res) => {
  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);
  res.json(jsonData);
});

app.post('/api/db', (req, res) => {

  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);
  let exercises = jsonData.current.exercises;
  const sets = Number();

  let exerciseObject = {
    description: req.body.description,
    id: String(Math.random()).slice(2),
    checkboxes: Array(3).fill({
      "reps": req.body.reps,
      "completed": false
    })
  }
  
  exercises = [...exercises, exerciseObject];
  jsonData.current.exercises = exercises;
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('database.json', dataString);

  res.json(jsonData.current.exercises);
});

app.delete('/api/db/:id', (req, res) => {
  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);
  let history = jsonData.history;

  history = history.filter(week => week.weekID != req.params.id);

  jsonData.history = history;
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('database.json', dataString);

  res.json(history);
});

app.listen(port, () => console.log(`Listening on port ${port}`));