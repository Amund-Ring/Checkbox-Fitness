const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { json } = require('body-parser');
const { DH_NOT_SUITABLE_GENERATOR } = require('constants');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getUniqueID = () => String(Math.random()).slice(2);

Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

//get data
app.get('/api/db', (req, res) => {
  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);
  res.json(jsonData);
});

// create exercise
app.post('/api/db', (req, res) => {

  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);
  let exercises = jsonData.current.exercises;
  const reps = Number(req.body.reps);
  const sets = Number(req.body.sets);

  let exerciseObject = {
    description: req.body.description,
    id: getUniqueID(),
    sets: sets,
    reps: reps,
    checkboxes: []
  }

  for (let i = 0; i < sets; i++) {
    exerciseObject.checkboxes.push({
      "reps": reps,
      "completed": false,
      "checkboxID": i
    });
  }
  
  exercises = [...exercises, exerciseObject];
  jsonData.current.exercises = exercises;
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('database.json', dataString);

  res.json(jsonData.current.exercises);
});


// toggle complete
app.put('/api/db/:exercise/:index', (req, res) => {

  const exerciseID = req.params.exercise;
  const index = req.params.index;

  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);

  const exercises = jsonData.current.exercises;
  let exercise = exercises.filter(ex => ex.id === exerciseID)[0];
  let checkboxes = exercise.checkboxes;
  const checkbox = checkboxes.filter(box => box.checkboxID == index)[0];
  
  checkbox.completed = !checkbox.completed;
  checkboxes = checkboxes.filter(box => box.checkboxID != index);
  checkboxes.unshift(checkbox);
  
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('database.json', dataString);


  res.end();
});

//delete exercise
app.delete('/api/db/:id', (req, res) => {
  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);

  let exercises = jsonData.current.exercises;
  exercises = exercises.filter(exercise => exercise.id != req.params.id);

  jsonData.current.exercises = exercises;
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('database.json', dataString);

  res.end();
});


//create new week and archive current week
app.put('/api/db/new', (req, res) => {

  
  const dataBuffer = fs.readFileSync('database.json');
  const jsonData = JSON.parse(dataBuffer);

  const history = jsonData.history;
  history.unshift(jsonData.current);
  
  jsonData.current = {
    "week": new Date().getWeek(),
    "weekID": getUniqueID(),
    "exercises": []
  };
  
  const dataString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync('database.json', dataString);


  res.send('Testing');
});



//delete week from history
app.delete('/api/db/history/:id', (req, res) => {
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