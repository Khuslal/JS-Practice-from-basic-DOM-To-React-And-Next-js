// filter
let numbers = [1, 2, 3, 4, 5, 6];
let num = numbers.filter((num) => {
    return num > 2; // return is required if {} is used instead of (num>2), or direct one line value defining num>2;
});
console.log(num);