const path = require('path');
//Use router since it's in a different file from app
const router = require('express').Router();

//Main page URL will deliver the public index.html 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//Appending "/notes" to the URL will deliver the public notes.html. 
// This will also be activated when the client clicks the "Get Started" button on the index.html page.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//In case anyone types a weird thing into the URL, redirect them to the main page
//This one must come last
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;