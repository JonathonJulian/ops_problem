const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route for the landing page
app.get('/', (req, res) => {
    res.render('index', {syslog: process.env.SYSLOG_SERVER});
});

// Start the server
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});