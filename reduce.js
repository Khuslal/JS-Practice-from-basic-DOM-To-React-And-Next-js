const mynums = [1, 2, 3, 4, 5];

// Zero is passed as the initial value for the accumulator or we can also create a variable 
// and pass it as the initial value for the accumulator. If we don't pass any initial value,
//  then the first element of the array will be used as the initial value for the accumulator.
const sum = mynums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
console.log(sum);

const shoppingCart = [
    { item: "item1", price: 100 },
    { item: "item2", price: 200 },
    { item: "item3", price: 300 },
    { item: "item4", price: 400 },
    { item: "item5", price: 500 }
];

// Calculate total price of items in the shopping cart using reduce
const totalPrice = shoppingCart.reduce((acc, product) => { return acc + product.price }, 0);
console.log(totalPrice);