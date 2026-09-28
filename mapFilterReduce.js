// filter
// let numbers = [1, 2, 3, 4, 5, 6];
// let num = numbers.filter((num) => {
//     return num > 2; // return is required if {} is used instead of (num>2), or direct one line value defining num>2;
// });
// console.log(num);

const books = [
    { title: "Book 1", author: "Author 1", year: 2001 },
    { title: "Book 2", author: "Author 2", year: 2005 },
    { title: "Book 3", author: "Author 3", year: 2010 },
    { title: "Book 4", author: "Author 4", year: 2015 },
    { title: "Book 5", author: "Author 5", year: 2020 }
];

// filter books published after 2010
const filteredBooks = books.filter((book) => {
    return book.author == "Author 2";
});
console.log(filteredBooks);