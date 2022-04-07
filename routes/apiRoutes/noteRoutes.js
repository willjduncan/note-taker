const fs = require('fs');
const router = require('express').Router();
//As suggested by npm for accessing random ID
const { v4: uuidv4 } = require('uuid');

// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require('../../db/db.json');


// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    fs.readFile(`./db/db.json`, 'utf8', (err, data) => {
        if(err) {
            console.log("Unable to find notes.");
            res.json(err);
        } else {
            const notes = JSON.parse(data);
            if (!notes)
            notes= [];
            res.json(notes);
        }
    })
});

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
router.post('/notes', (req, res) => {
    // Destructuring to get title and text
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        //Unique ID
        review_id: uuidv4(),
      };
  
      fs.readFile(`./db/db.json`, (err, data) => {
        if(err) {
        console.log("Unable to access notes.");
        res.json(err);
        } else {
          const notes= JSON.parse(data);
          console.log("DATA: " + data);
          if (!notes) {
              notes = [];
              console.log("this is your first note");
          }
          notes.push(newNote);
          // Convert the data to a string so we can save it
          const notePackage = JSON.stringify(notes);
  
            fs.writeFile(`./db/db.json`, notePackage, (err) => {
              if(err)
              {
                console.log("Unable to store note.")
                res.json(err);
              } else {
                const response = {
                  status: 'sucess',
                  body: newNote,
                };
                console.log(response);
                res.json(response);
              }
            }
            )
          }
      })
  
    } else {
        console.log("Note not properly filled out")
        res.json(err);
    }

});

  
// router.get('/animals/:id', (req, res) => {
//     const result = findById(req.params.id, animals);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
// });




module.exports  = router;