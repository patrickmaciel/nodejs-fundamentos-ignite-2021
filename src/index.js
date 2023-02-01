// create an express server
const express = require('express');
const app = express();

// create a GET route
app.get('/', (req, res) => {
    return res.send('Hello World Top');
});

app.get('/courses', (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.get('/courses/:id', (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post('/courses', (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put('/courses/:id', (req, res) => {
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch('/courses/:id', (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete('/courses/:id', (req, res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 4"]);
});

// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
