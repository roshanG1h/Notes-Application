import axios from "axios";

function NoteItem({ note, fetchNotes, setEditingNote }) {

  // Backend API URL
  const API_URL =
    "https://notes-application-bg4g.onrender.com/api/notes";

  const handleDelete = async () => {
    try {

      // DELETE NOTE
      await axios.delete(
        `${API_URL}/${note.id}`
      );

      // Refresh Notes
      fetchNotes();

    } catch (error) {
      console.log("Delete Error:", error);
      alert("Failed to delete note");
    }
  };

  return (
    <div className="card">
      <h3>{note.title}</h3>

      <p>{note.content}</p>

      <div className="btn-group">

        <button
          onClick={() => setEditingNote(note)}
        >
          Edit
        </button>

        <button onClick={handleDelete}>
          Delete
        </button>

      </div>
    </div>
  );
}

export default NoteItem;