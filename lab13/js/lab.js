document.addEventListener("DOMContentLoaded", () => {

console.log("The code works");

let clickBox = (e) => {
	console.log("You changed the color of the box!");
        if (e.currentTarget.style.backgroundColor === 'blue'){
            e.currentTarget.style.backgroundColor = 'red'
        } else if (e.currentTarget.style.backgroundColor === 'red') {
            e.currentTarget.style.backgroundColor = 'yellow';
        }else {
            e.currentTarget.style.backgroundColor = 'blue';
        }
}

let changeBox = document.querySelector("#box1")
changeBox.addEventListener('click', clickBox)

});
