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

// Destructuring
let arr = [1, 2, 3, 4, 5];
let [a, b] = arr;
console.log(a, b);