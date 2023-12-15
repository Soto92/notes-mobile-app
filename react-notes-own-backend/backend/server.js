const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const WebSocket = require("ws");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let notes = [];

if (fs.existsSync("notes.json")) {
  const data = fs.readFileSync("notes.json", "utf-8");
  notes = JSON.parse(data);
}

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.send(JSON.stringify(notes));

  ws.on("message", (message) => {
    notes.push(JSON.parse(message));
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(notes));
      }
    });
  });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  broadcastNotes();
  res.json(notes);
});

app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes[id] = req.body;
  broadcastNotes();
  res.json(notes);
});

app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes.splice(id, 1);
  broadcastNotes();
  res.json(notes);
});

function saveNotes() {
  fs.writeFileSync("notes.json", JSON.stringify(notes), "utf-8");
}
function broadcastNotes() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(notes));
    }
  });
  saveNotes();
}
