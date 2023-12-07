import { useEffect, useState } from "react";
import "./App.css";
import { getNotes, postNote } from "./api/service";

function App() {
  const [text, setText] = useState("");

  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      console.log({ response });
      setText(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <label>Write your text:</label>
        <textarea
          onChange={(arg) => setText(arg.target.value)}
          name="postContent"
          value={text}
          rows={4}
          cols={40}
        />

        <button onClick={() => postNote(text)}>Save</button>
      </header>
    </div>
  );
}

export default App;
