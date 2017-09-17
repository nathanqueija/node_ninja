const fs = require("fs");
var obj = {
  name: "Nathan"
};

var stringObj = JSON.stringify(obj);

var personString = '{"name":"Andrew", "age": 26}';

var jsObj = JSON.parse(personString);

var originalNote = {
  title: "Some title",
  body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
