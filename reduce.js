const mynums = [1, 2, 3, 4, 5];

const sum = mynums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
console.log(sum);