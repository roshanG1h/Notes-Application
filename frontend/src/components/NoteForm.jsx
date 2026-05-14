import { useEffect, useState } from "react";
import axios from "axios";

function NoteForm({ fetchNotes, editingNote, setEditingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("All fields required");
      return;
    }

    try {
      if (editingNote) {
        await axios.put(
          `http://localhost:5000/api/notes/${editingNote.id}`,
          {
            title,
            content,
          }
        );

        setEditingNote(null);
      } else {
        await axios.post("http://localhost:5000/api/notes", {
          title,
          content,
        });
      }

      setTitle("");
      setContent("");

      fetchNotes();
    } catch (error) {
      console.log(error);
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