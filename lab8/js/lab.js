document.addEventListener("DOMContentLoaded", () => {
console.log("It runs")

let outputEl = document.querySelector("#output");

document.createElement("button");

let oneEl = document.createElement("button");
//begin to style the newly created button
oneEl.textContent = "I am the button for oneEl";
oneEl.style.color = "blue";
oneEl.style.background = "yellow";


let twoEl = document.createElement("button");
twoEl.textContent = "I am the button for twoEl";
twoEl.style.color = "red";
twoEl.style.background = "darkgrey";

let parent = document.querySelector("#output");
parent.appendChild(oneEl);
parent.appendChild(twoEl);
marginLeft = "50%";
});
