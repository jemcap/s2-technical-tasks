// TASK 1:
// Write a function / method to loop through a range of numbers, from X to Y
// Highlight any that are divisible by 3 as "divisible by 3"
// Highlight any that are divisible by 5 as "divisible by 5"
// Highlight any that are divisible by both as "divisible by 3 and 5"
// ----------------------------------------------------------------------------------
// Code:

// PSEUDOCODE
// write a function and pass in an array of nums as an argument.
// declare an array that will hold the numbers that are divisible by X, Y, Z
// loop through the array
// if each number in the array is divisible by X, Y, Z, push the numbers to the array
// return each array

// pass in the array of numbers as an argument
function highlightNums(nums) {
  // declare an array to hold each number under each condition
  let divisibleByThree = [];
  let divisibleByFive = [];
  let divisibleByThreeAndFive = [];
  // loop through the nums array
  for (let num of nums) {
    // first condition: if the nums are divisble by both, push each num to the divisibleByThreeAndFive array
    if (num % 3 === 0 && num % 5 === 0) {
      divisibleByThreeAndFive.push(num);
    }
    // second condition: if the nums are divisble by three, push each num to the divisibleByThree array
    if (num % 3 === 0) {
      divisibleByThree.push(num);
    }
    // third condtion: if the nums are divisble by five, push each num to the divisibleByFive array
    if (num % 5 === 0) {
      divisibleByFive.push(num);
    }
  }
  //   return each array
  return `divisible by 3: ${divisibleByThree}
    divisible by 5: ${divisibleByFive}
    divisible by 3 and 5: ${divisibleByThreeAndFive}`;
}

highlightNums([1, 3, 5, 6, 10, 12, 15, 18, 20, 24, 30, 35, 45, 60]);

// REFACTORED CODE

function highlightNumsRefactored(nums) {
  //   edge case: check if numbers in the array are typeof number
  let numbers = nums.every((num) => typeof num === "number");
  if (!numbers) return null;
  // declare a variable that filters and returns a new array that holds the multiples of three
  let numsDivisibleByThree = nums.filter((num) => num % 3 === 0);
  // declare a variable that filters and returns a new array that holds the multiples of five
  let numsDivisibleByFive = nums.filter((num) => num % 5 === 0);
  // declare a variable that filters and returns a new array that holds the multiples of three and five
  let numsDivisibleByThreeAndFive = nums.filter(
    (num) => num % 3 === 0 && num % 5 === 0
  );
  //   return each array
  return `divisible by 3: ${numsDivisibleByThree}
      divisible by 5: ${numsDivisibleByFive}
      divisible by 3 and 5: ${numsDivisibleByThreeAndFive}`;
}

highlightNumsRefactored([1, 3, 5, 6, 10, 12, 15, 18, 20, 24, 30, 35, 45, 60]);

module.exports = highlightNumsRefactored;
module.exports = highlightNums;

// ----------------------------------------------------------------------------------
