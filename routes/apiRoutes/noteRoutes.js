const router = require('express').Router();
// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require('../../db/db.json');


// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).



router.get('/notes', (req, res) => {
    // res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
  
// router.get('/animals/:id', (req, res) => {
//     const result = findById(req.params.id, animals);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
// });
  
router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();
  
    if (!validateAnimal(req.body)) {
      res.status(400).send('The animal is not properly formatted.');
    } else {
      const animal = createNewAnimal(req.body, animals);
      res.json(animal);
    }
});

module.exports  = router;