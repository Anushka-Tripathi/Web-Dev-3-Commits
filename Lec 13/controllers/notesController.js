const { notes } = require('../models/data');

const getNotes = (req, res) => {

  try {
    if (!notes || notes.length === 0) {
      return res.status(404).send("No notes found");
    }
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

const getNoteById = (req, res) => {
  let {id} = req.params;

  let element = notes.find(n => n.id === Number(id));
  if (!element) {
    return res.status(404).send("Note not found");
  }

  res.status(200).send(element);
};

const createNote = (req, res) => {
  let {id, title, description, link, note, created_at, author} = req.body;
  let newNote = {
    id: notes.length + 1,
    title: title,
    description: description,
    link: link,
    note: note,
    created_at: created_at,
    author: author
  };
  notes.push(newNote);
  res.status(201).send("Note created successfully");
};

const updateNote = (req, res) => {
  let {id} = req.params;

  const note = notes.find(n => n.id === Number(id));
  if (!note) {
    return res.status(404).send("Note not found");
  }
  
  Object.assign(note, req.body);
  res.status(200).send("Note updated successfully");
}

const deleteNote = (req, res) => {
  let {id} = req.params;
  
  const note = notes.find(n => n.id === Number(id));
  if (!note) {
    return res.status(404).send("Note not found");
  }

  let index = notes.indexOf(note);
  notes.splice(index, 1);
  res.status(200).send("Note deleted successfully");
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };