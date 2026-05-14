import { useEffect, useState } from "react";
import axios from "axios";

function NoteForm({ fetchNotes, editingNote, setEditingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Backend API URL
  const API_URL =
    "https://notes-application-bg4g.onrender.com/api/notes";

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title || !content) {
      alert("All fields required");
      return;
    }

    try {
      // UPDATE NOTE
      if (editingNote) {
        await axios.put(
          `${API_URL}/${editingNote.id}`,
          {
            title,
            content,
          }
        );

        setEditingNote(null);
      }

      // CREATE NOTE
      else {
        await axios.post(API_URL, {
          title,
          content,
        });
      }

      // Clear form
      setTitle("");
      setContent("");

      // Refresh notes
      fetchNotes();
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <button type="submit">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;