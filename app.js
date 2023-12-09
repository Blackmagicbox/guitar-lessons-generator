import express from "express";
import {GenerateMidiFile} from "./src/generate-midi-file.js";

const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("Am I working?");
GenerateMidiFile('MajorScale', [["C4", "4"], ["D4", "4"], ["E4", "4"], ["F4", "4"], ["G4", "4"], ["A4", "4"], ["B4", "4"], ["C5", "4"], ["C4", "1"]]);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
// Path: app.js

