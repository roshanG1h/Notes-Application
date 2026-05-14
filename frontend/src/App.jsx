import { useEffect, useState } from "react";
import axios from "axios";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {

  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Backend API URL
  const API_URL =
    "https://notes-application-bg4g.onrender.com/api/notes";

  // Fetch Notes
  const fetchNotes = async () => {
    try {

      const response = await axios.get(API_URL);

      setNotes(response.data);

    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  // Load notes on page load
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">

      <h1>Notes App</h1>

      <NoteForm
        fetchNotes={fetchNotes}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />

      <NoteList
        notes={notes}
        fetchNotes={fetchNotes}
        setEditingNote={setEditingNote}
      />

    </div>
  );
}

export default App;