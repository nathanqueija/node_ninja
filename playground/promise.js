var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Resolved");
//     reject("An Error ocurred");
//   }, 2500);
// });

// somePromise.then(
//   message => {
//     console.log(message);
//   },
//   errorMessage => {
//     console.log(errorMessage);
//   }
// );

asyncAdd(3, 5)
  .then(result => {
    console.log(result);
    return asyncAdd(result, 33);
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
