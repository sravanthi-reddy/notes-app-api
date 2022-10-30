const express = require('express')
const { createNotes, updateNote, deleteById} = require('../controller/note.controller')
const router = express.Router()

router.post('/', createNotes)
router.put('/', updateNote)
router.delete('/', deleteById)

module.exports = router
