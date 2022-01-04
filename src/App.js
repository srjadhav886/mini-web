
let inputList = ["delhi", "calcutta", "chennai"];
// let outputList = ["Hello DELHI", "Hello CALCUTTA", "Hello CHENNAI"];

// APPROACH 1
const outputList = [];
for (let item of inputList) {
  let newItem = `Hello ${item.toUpperCase()}`;
  outputList.push(newItem);
}

console.log(inputList);
console.log(outputList);

console.log();
// Approach 2
const list2 = inputList.map((item) => {
  return `Hello ${item.toUpperCase()}`;
});
console.log(list2);

// inputList.map(() => { });
// inputList.map((item) => `Hello ${item.toUpperCase()}`);
// inputList.map((item) => {
//   return `Hello ${item.toUpperCase()}`;
// });
