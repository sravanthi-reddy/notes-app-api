const { Op } = require("sequelize");
const { logger } = require("../config/logger");
const Note = require("../model/note.model");
const { validateNoteArray, isNotEmpty, validateNote } = require("../utils/validators");

//View all notes
const getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        if (!validateNoteArray(notes)) {
            res.status(500).send('Invalid data')
        }
        if (notes.length < 1) {
            res.send({
                "notes": notes,
                "message": "Notes not available"
            })
        } 
        res.send({ notes })
    } catch (error) {
        logger.error(`${error.status || 500}- ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send('Fail to query')
    }
}


// Create a Note
const createNotes = async (req, res) => {
    try{
        var newText = req.body.text;
        if(!newText){
            res.status(500).send('Please enter valid data')
        }
        var newNote = await Note.create({ text: newText })
        if (!validateNote(newNote)) {
            res.status(500).send('Invalid data type')
        }
        res.status(201).send({ newNote })
    }
    catch(error)  {
        logger.error(`${error.status || 500}- ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send('Failed to create a note')
    }
};

//search with text
const getNotesBySearchKey = async (req, res) => {
    try {
        var searchKey = req.params.searchKey;
        var notes = await Note.findAll({
            where: {
                text: {
                    [Op.like]: '%' + searchKey + '%',
                },
            }
        })
        if (!validateNoteArray(notes)) {
            res.status(500).send('Invalid data')
        }
        if (notes.length < 1) {
            return res.status(201).send({
                message: "Notes not found for search key",
                notes : notes
            });
        }
        res.status(201).send({ notes })
    }
    catch(error) {
        logger.error(`${error.status || 500}- ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send('Failed to get notes')
    }
};

// Update a note identified by the noteId in the request
const updateNote = async (req, res) => {
    try{
        var newText = req.body.text;
        var noteId = req.body.id;
        if(!newText){
            res.status(500).send('Please fill valid text information to be updated')
        }
        if(!noteId){
            res.status(500).send('Please provide valid id to be updated')
        }
        var returnNote = await Note.update({
            text: newText }, 
            { where:  
            {id: noteId},
            returning: true,
            plain: true
         })
        console.log("returned note update",returnNote )
        var updatedNote = await Note.findByPk(noteId)
        if (!validateNote(updatedNote)) {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        res.send({ updatedNote });
    }
    catch(error) {
        logger.error(`${error.status || 500}- ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send('Failed to update the note')
    }
};

// Delete a note with the specified noteId in the request
const deleteById = async (req, res) => {
    try{
        var noteId = req.body.id
        if(!noteId){
            res.status(500).send('Please provide valid id')
        }
        var deletedNote = await Note.destroy({
            where: {
                id: noteId
            }
        })
        console.log("returned note deletedNote ",deletedNote )

        res.send({ message: "Note deleted successfully!" });
    }
    catch(error)  {
        logger.error(`${error.status || 500}- ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send('Failed to delete the record')
    }
};

// Delete all the notes
const deleteAll = async (req, res) => {
    try{
        var deletedNotes = await Note.destroy({
            where: {},
            truncate: true
        }, {
            returning: true,
        })
        console.log("returned note deleted notes ",deletedNotes )
        res.send({ message: "Note deleted successfully!" });
    }
    catch(error) {
        logger.error(`${error.status || 500}- ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(500).send('Failed to delete the record')
    }
};

module.exports = { getNotes, createNotes,updateNote, deleteById, deleteAll, getNotesBySearchKey }