const express = require('express');
const app = express();
app.use(express.json());

let notes = [];

app.get('/notes', (req, res) => res.json(notes));

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).send('Note added');
});

app.listen(3000, () => console.log('Server running'));
