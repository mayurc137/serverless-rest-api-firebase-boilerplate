const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({
    origin: true
}));

// Add middleware to authenticate requests or perform additional tasks

let myMiddleware = (req, res, next) => {
    //authentication code goes here
    next();
}

app.use(myMiddleware);


// build multiple CRUD interfaces:
app.get('/', (req, res) => {
    let response = 'Hello World';
    res.send(response);
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

app.post('/', (req, res) => {
    let response = 'Hello World';
    res.send(response);
});


app.put('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

app.delete('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});


// Expose Express API as a single Cloud Function:
exports.endpoints = functions.https.onRequest(app);


