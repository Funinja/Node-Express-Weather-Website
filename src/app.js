const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

console.log(__dirname);
console.log(path.join(__dirname, '../public/'));

//defined paths for express config
const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set up handlebars 
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory
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

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Dennis Lam',
        errorMessage: 'Help article not found.'
    });
})

app.get('*', (req, res) => { //must be last so express can check each other handler first
    // res.send('My 404 page');
    res.render('error', {
        title: '404',
        name: 'Dennis Lam',
        errorMessage: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});