const express = require('express');
const { getNotes, getNoteById, createNote, updateNote, deleteNote } = require('../controllers/notesController');
const { isAuthorized } = require('../middlewares/isAuthorized');
const { isLoggedIn } = require('../middlewares/isAuthorized');

const router = express.Router();

router.get("/notes", isLoggedIn, isAuthorized, getNotes);
router.get("/notes/:id", isLoggedIn, isAuthorized, getNoteById);
router.post('/notes', createNote);
router.put('/update-note/:id', updateNote);
router.delete('/delete-note/:id', deleteNote);

module.exports = router;