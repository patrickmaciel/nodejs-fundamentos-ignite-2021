// create an express server
const express = require('express');
const app = express();

// middleware enable json
app.use(express.json());

/**
 * Tipos de Parametros
 *
 * Route Params => params on routes, identify a resource on update or delete (edit, delete or search/find)
 *
 * Query Params => params on routes, used to filter, pagination, sort (search/find)
 *
 * Body Params => params payload, used to create or edit a resource (create or edit)
 */

app.get('/', (req, res) => {
    return res.send('Hello World Top');
});

app.get('/courses', (req, res) => {
    const query = req.query;
    console.log(query);
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.get('/courses/:id', (req, res) => {
    const params = req.params;
    console.log(params);
    return res.json([`Curso ${params.id}`, "Curso 2", "Curso 3"]);
});

app.post('/courses', (req, res) => {
    const body = req.body;
    console.log(body);
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
