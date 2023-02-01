// create an express server
const express = require('express');
const app = express();

// create a GET route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
