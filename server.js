const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//setting up express.js 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware for having CSS and JS work for the HTML
app.use(express.static('public'));
//Middleware for successful sending of objects for POST methods
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//middleware for setting up routes and organizing files
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Listener for starting npm
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});