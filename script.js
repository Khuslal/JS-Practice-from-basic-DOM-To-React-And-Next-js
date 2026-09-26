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