const number = [1, 2, 3, 4, 5]

// Single line map function
const mapNumbers = number.map((num) => {
    return num * 10;
});
console.log(mapNumbers);

// Chaining map and filter functions
const result = number
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 50)
console.log(result)   