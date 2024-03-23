// // Armstrong number
// let sum = 0;
// const num = prompt(`Enter a positive number`);
// const noOfDigits = num.length;
// let temp = num;
// while (temp > 0) {
//   let remainder = temp % 10;
//   // sum += remainder * remainder * remainder;
//   sum += remainder ** noOfDigits;
//   temp = parseInt(temp / 10);
// }
// if (sum == num) {
//   document.write(`The number ${num} is an Armstrong number`);
// } else {
//   document.write(`The number ${num} is not a Armstrong number`);
// }

// Find Armstrong number between given interval
const lNum = parseInt(prompt(`Enter lowest number`));
const hNum = parseInt(prompt(`Enter highest number`));

document.write(`Armstrong numbers are: <br>`);
for (let i = lNum; i <= hNum; i++) {
  let numOfDigits = i.toString().length;
  let sum = 0;
  let temp = i;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numOfDigits;
    temp = parseInt(temp / 10);
  }
  if (sum == i) {
    document.write(`${i}<br>`);
  }
}
