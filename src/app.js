const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public/'));

const publicDirectoryPath = path.join(__dirname, '../public/');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Dennis Lam'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Dennis Lam'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Dennis Lam',
        helpText: 'This is helpful text'
    });
});


app.get('/weather', (req, res) => {
    res.send({
        weather: 27,
        feelslike: 6
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});