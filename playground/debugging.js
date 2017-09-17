// Debug with chrome developer tools
//node -inspect-brk playground/debugging.js
// chrome://inspect
var person = {
  name: "Nathan"
};

person.age = 26;
debugger;
person.name = "Mike";

console.log(person);
