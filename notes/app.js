const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const {
  addNote,
  getNote,
  getAllNotes,
  removeNote,
  logNote
} = require("./notes");
const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};
const argv = yargs
  .command("add", "Add a new Note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List All notes")
  .command("read", "Read a Note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help().argv;
var command = process.argv[2];

if (command === "add") {
  var note = addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    logNote(note);
  } else {
    console.log("Note already exists");
  }
} else if (command === "list") {
  var allNotes = getAllNotes();
  console.log(`Printing ${allNotes.length} note(s):`);
  allNotes.forEach(note => logNote(note));
} else if (command === "read") {
  var note = getNote(argv.title);
  if (note) {
    console.log("Note found!");
    logNote(note);
  } else {
    console.log("Note not found!");
  }
} else if (command === "remove") {
  var noteRemoved = removeNote(argv.title);
  var message = noteRemoved ? "Note Removed!" : "Note not found";
  console.log(message);
} else {
  console.log("Command not found");
}
