const fs = require('fs');
const router = require('express').Router();
//As suggested by npm for accessing random ID
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../../db/db.json');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    fs.readFile(`./db/db.json`, 'utf8', (err, data) => {
        if(err) {
            console.log("Unable to find notes.");
            res.json(err);
        } else {
            const notes = JSON.parse(data);
            res.json(notes);
        }
    })
});

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
router.post('/notes', (req, res) => {
    // Destructuring to get title and text
    const { title, text } = req.body;
  
    // If all the required properties are present, create a new note object
    if (title && text) {
      const newNote = {
        title,
        text,
        //Unique ID
        id: uuidv4(),
      };
      //get the notes from db.json
      fs.readFile(`./db/db.json`, (err, data) => {
        if(err) {
        console.log("Unable to access notes.");
        res.json(err);
        } else {
          const notes= JSON.parse(data);
          //if no notes, make an empty array
          if (!notes) {
              notes = [];
              console.log("this is your first note");
          }
          //add the new note to the notes array
          notes.push(newNote);
          // Convert the data to a string so we can save it
          const notePackage = JSON.stringify(notes);
          //write file using the new array of objects
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


// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
// In order to delete a note, you'll need to read all notes from the db.json file, 
// remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete('/notes/:id', (req, res) => {
        //get the notes from db.json
        fs.readFile(`./db/db.json`, (err, data) => {
        if(err) {
            console.log("Unable to access notes.");
            res.json(err);
        } else {
            const notes= JSON.parse(data);
            //if no notes, tell the user
            if (!notes) {
                res.send(console.log("no notes to delete"));
            }
            //add the new note to the notes array
            let newNotes = notes.filter(note => note.id !== req.params.id);
            // Convert the data to a string so we can save it
            const notePackage = JSON.stringify(newNotes);
            //write file using the new array of objects
            fs.writeFile(`./db/db.json`, notePackage, (err) => {
                if(err)
                {
                console.log("Unable to store note.")
                res.json(err);
                } else {
                const response = {
                    status: 'sucess',
                };
                console.log(response);
                }
            })
        }
    })
    res.send('Got a DELETE request at /user');
})

module.exports  = router;