const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew',
        age: 27
    }, {name: 'Sarah'}]);
})

app.get('/about', (req, res) => {
    res.send('<h1> About </h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        weather: 27,
        feelslike: 6
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});