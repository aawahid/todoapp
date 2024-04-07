const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for todos
let todos = [];

// Routes
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.sendStatus(201);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos.splice(id, 1);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
