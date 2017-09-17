console.log("Starting up");
setTimeout(() => {
  console.log("Inside of callback");
}, 2000);

setTimeout(() => {
  console.log("Second callback");
}, 0);
console.log("Finishing up");

//Call stack
//Runs one command per time
// Event loop gets a stack of callbacks ready to be called
// If call stack is empty one callback per time will be executed
