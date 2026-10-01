// Button
let newBtn = document.createElement("button");
newBtn.innerHTML = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

// Paragraph
let para = document.querySelector("p");
para.classList.add("para-2");

// Event Listener
let btn = document.querySelector("#click-btn");

let changePara = () => {
    para.classList.toggle("para-2");
}

// click event
btn.addEventListener("click", changePara);
// mouseover event for funny effect
btn.addEventListener("mouseover", changePara);

// removing hover effect after 5 seconds
setTimeout(() => {
    btn.removeEventListener("mouseover", changePara);
}, 5000);

// Array Destructuring
// let arr = [1, 2, 3, 4, 5];
// let [a, , ...rest] = arr;
// console.log(a, rest);

// Object Destructuring
let user = { name, age, contact } = { fname: 'khush', age: 23, contact: 9702500000 };
let { fname, ...rest } = user;
console.log(fname, rest);
console.log(fname, age, contact);