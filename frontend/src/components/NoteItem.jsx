import axios from "axios";

function NoteItem({ note, fetchNotes, setEditingNote }) {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/notes/${note.id}`
      );

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      <div className="btn-group">
        <button onClick={() => setEditingNote(note)}>
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