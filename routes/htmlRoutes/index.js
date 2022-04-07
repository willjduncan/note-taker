const path = require('path');
//use router since it's in a different file from app
const router = require('express').Router();

//main page URL will deliver the public index.html 
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//In case anyone types a weird thing into the URL, redirect them to the main page
//this one must come last
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;