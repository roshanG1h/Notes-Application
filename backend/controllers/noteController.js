const db = require("../config/db");

// CREATE NOTE
const createNote = (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and Content are required",
      });
    }

    const sql = "INSERT INTO notes(title, content) VALUES (?, ?)";

    db.query(sql, [title, content], (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Database Error",
          error: err,
        });
      }

      res.status(201).json({
        message: "Note Created Successfully",
        noteId: result.insertId,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// GET ALL NOTES
const getNotes = (req, res) => {
  const sql = "SELECT * FROM notes ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    res.status(200).json(results);
  });
};

// GET SINGLE NOTE
const getNoteById = (req, res) => {
  const id = Number(req.params.id);

  const sql = "SELECT * FROM notes WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    res.status(200).json(results[0]);
  });
};

// UPDATE NOTE
const updateNote = (req, res) => {
  const id = Number(req.params.id);

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  const sql = "UPDATE notes SET title = ?, content = ? WHERE id = ?";

  db.query(sql, [title, content, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    res.status(200).json({
      message: "Note Updated Successfully",
    });
  });
};

// DELETE NOTE
const deleteNote = (req, res) => {
  const id = Number(req.params.id);

  const sql = "DELETE FROM notes WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    res.status(200).json({
      message: "Note Deleted Successfully",
    });
  });
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
