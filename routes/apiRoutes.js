const fs = require('fs');

module.exports = function (app) { //GET
    app.get("/api/notes", function (req, res) {
        console.log("server activity");
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            res.json(notes);
        });
    });

    app.post("/api/notes", function (req, res) { //POST
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            if (err) throw err;

            let notes = JSON.parse(data);
            let newNotes = req.body;
            let newId = (notes.length).toString();
            newNotes.id = newId;
            notes.push(newNotes);

            fs.writeFileSync("db/db.json", JSON.stringify(notes), "utf-8", (err, data) => {
                if (err) throw err;
                console.log(`it worked ¯\_(ツ)_/¯`); 
            });
            res.json(notes);
        });
    });

    app.delete("/api/notes/:id", function (req, res) { //DELETE (╯°□°）╯︵ ┻━┻
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            if (err) throw err;
            let note = JSON.parse(data);
            let noteId = req.params.id;
            let newNoteId = 0;

            note = note.filter(currNotes => {
                return currNotes.id != noteId;
            });
            for (currNotes of note) {
                currNotes.id = newNoteId.toString();
                newNoteId++;
            }
            fs.writeFileSync("./db/db.json", JSON.stringify(note), "utf-8", (err, data) => {
                if (err) throw err;
                console.log(`dear lord have mercy ¯\_(⊙︿⊙)_/¯ `)
            });

            res.json(note);
        });

        
    });









}