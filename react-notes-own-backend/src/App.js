import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");
    ws.onmessage = (event) => {
      setNotes(JSON.parse(event.data));
    };
    fetchNotes();
    return () => {
      ws.close();
    };
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes");
    setNotes(response.data);
  };

  const addNote = async () => {
    await axios.post("http://localhost:5000/notes", { content: newNote });
    setNewNote("");
  };

  const updateNote = async (id, content) => {
    await axios.put(`http://localhost:5000/notes/${id}`, { content });
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <input
              type="text"
              value={note.content}
              onChange={(e) => updateNote(index, e.target.value)}
            />
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
