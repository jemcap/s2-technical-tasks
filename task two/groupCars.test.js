const groupCars = require("./groupCars");

const carArray = [
  { car_make: "bmw", car_model: "m2", transmission: "automatic" },
  { car_make: "audi", car_model: "A3", transmission: "automatic" },
  { car_make: "ford", car_model: "focus", transmission: "manual" },
  { car_make: "audi", car_model: "quatro", transmission: "manual" },
  { car_make: "bmw", car_model: "330i", transmission: "manual" },
  { car_make: "nissan", car_model: "leaf", transmission: "automatic" },
];

describe("groupCars function", () => {
  it("should group cars based on car_make", () => {
    const expectedOutput = [
      {
        car_make: "bmw",
        items: [
          { car_model: "m2", transmission: "automatic" },
          { car_model: "330i", transmission: "manual" },
        ],
      },
      {
        car_make: "audi",
        items: [
          { car_model: "A3", transmission: "automatic" },
          { car_model: "quatro", transmission: "manual" },
        ],
      },
      {
        car_make: "ford",
        items: [{ car_model: "focus", transmission: "manual" }],
      },
      {
        car_make: "nissan",
        items: [{ car_model: "leaf", transmission: "automatic" }],
      },
    ];

    const result = groupCars(carArray);
    expect(result).toEqual(expectedOutput);
  });

  it("should add the properties to the same car_make", () => {
    const originalCarArray = [
      { car_make: "bmw", car_model: "m2", transmission: "automatic" },
      { car_make: "bmw", car_model: "330i", transmission: "manual" },
    ];

    const expectedOutput = [
      {
        car_make: "bmw",
        items: [
          { car_model: "m2", transmission: "automatic" },
          { car_model: "330i", transmission: "manual" },
        ],
      },
    ];

    expect(groupCars(originalCarArray)).toEqual(expectedOutput);
  });
});
