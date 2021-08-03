const path = require('path');

const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public/'));

const publicDirectoryPath = path.join(__dirname, '../public/');

const app = express();

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        weather: 27,
        feelslike: 6
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});