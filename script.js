// Button
let newBtn = document.createElement("button");
newBtn.innerHTML = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

// Paragraph
let para = document.querySelector("p");
para.classList.add("para-2");