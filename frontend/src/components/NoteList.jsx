import NoteItem from "./NoteItem";

function NoteList({ notes, fetchNotes, setEditingNote }) {
  return (
    <div>
      {notes.length === 0 ? (
        <p>No Notes Found</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            fetchNotes={fetchNotes}
            setEditingNote={setEditingNote}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;