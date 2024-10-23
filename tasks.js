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
    else if (num % 3 === 0) {
      divisibleByThree.push(num);
    }
    // third condtion: if the nums are divisble by five, push each num to the divisibleByFive array
    else if (num % 5 === 0) {
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

console.log(
  highlightNumsRefactored([1, 3, 6, 6, 10, 12, 15, 18, 20, 24, 30, 35, 45, 60])
);

// ----------------------------------------------------------------------------------
// ==================================================================================

// TASK 2:
// Write an function / method to accept a multi-dimensional JSON array, and produce an equivalent list grouped by any valid field
// Use the following JSON array:
// [
//   {car_make: "bmw", car_model: "m2", transmission: "automatic"},
//   {car_make: "audi", car_model: "A3", transmission: "automatic"},
//   {car_make: "ford", car_model: "focus", transmission: "manual"},
//   {car_make: "audi", car_model: "quatro", transmission: "manual"},

//   {car_make: "bmw", car_model: "330i", transmission: "manual"},
//   {car_make: "nissan", car_model: "leaf", transmission: "automatic"}
// ]

// If grouping by car_make, for example, the output format should be:
// [
//   {car_make: "bmw", items: [{car_model: "m2", transmission: "automatic"}, {car_model: "330i", transmission: "manual"}]},
//   {car_make: "audi", items: [{car_model: "A3", transmission: "automatic"}, {car_model: "quatro", transmission: "manual"}]},

//   {car_make: "ford", items: [{car_model: "focus", transmission: "manual"}]},

//   {car_make: "nissan", items: [{car_model: "leaf", transmission: "automatic"}]}

// ]
// ----------------------------------------------------------------------------------
// Code:

// PSEUDOCODE
// declare a function, passing in the JSON array as an argument
// declare a variable that holds an empty array soon to be filled with the new object properties
// loop through the array
// check to see if a current element already exists, if true, push the appropriate properties, if false, create a new property with the new items array property
// return the array

// Use the following JSON array:
const carArray = [
  { car_make: "bmw", car_model: "m2", transmission: "automatic" },
  { car_make: "audi", car_model: "A3", transmission: "automatic" },
  { car_make: "ford", car_model: "focus", transmission: "manual" },
  { car_make: "audi", car_model: "quatro", transmission: "manual" },
  { car_make: "bmw", car_model: "330i", transmission: "manual" },
  { car_make: "nissan", car_model: "leaf", transmission: "automatic" },
];

function groupCars(arr) {
  // declare an empty array
  let groupOfCars = [];
  // loop through the array
  for (const car of arr) {
    // make car_make the key; group by car_make
    // find an exisiting element in groupOfCars array, if true, return that element
    let isExisting = groupOfCars.find((item) => item.car_make === car.car_make);
    // if there is an existing element, add the respective car_model and transmission properties
    // otherwise create a new items propery to the groupOfCars array to push the car_make and the respective car_model and transmission properties
    if (isExisting) {
      isExisting.items.push({
        car_model: car.car_model,
        transmission: car.transmission,
      });
    } else {
      groupOfCars.push({
        car_make: car.car_make,
        items: [{ car_model: car.car_model, transmission: car.transmission }],
      });
    }
  }
  //   return the groupOfCars array
  return groupOfCars;
}

groupCars(carArray);
// ----------------------------------------------------------------------------------
