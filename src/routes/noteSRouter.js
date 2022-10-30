const express = require('express')
const { getNotes, deleteAll, getNotesBySearchKey } = require('../controller/note.controller')
const router = express.Router()

router.get('/', getNotes)
router.get('/search/:searchKey', getNotesBySearchKey)
router.delete('/', deleteAll)

module.exports = router