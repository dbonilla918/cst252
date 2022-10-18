document.addEventListener("DOMContentLoaded", () => {

//The code targets everything with the class of "box"
let boxColorChange = document.querySelectorAll(".box");

//The code below is what makes the blue boxes turn yellow
let turnYellow = (box) =>{
    box.style.backgroundColor = 'yellow';
    console.log("The color of the boxes have changed from blue to yellow, good job")
};
boxColorChange.forEach(turnYellow);

//This portion of code is what creates the black borders around the yellow boxes
let boxBorder = (e) => {
    e.style.borderColor = "black";
    console.log("You have added a black border to a yellow box");
};

boxColorChange.forEach.addEventListener('click', boxBorder)

});
