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

module.exports = groupCars;
// ----------------------------------------------------------------------------------
