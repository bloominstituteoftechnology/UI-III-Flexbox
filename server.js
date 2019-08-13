const express = require('express');
const path = require('path');

const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname, '/great-idea')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname,'/great-idea/services.html'));
});

app.get('/vision', (req, res) => {
    res.sendFile(path.join(__dirname,'/great-idea/vision.html'));
});

app.listen(port, () => {
    `Listening at port ${port}`;
});