// 1. what element triggers the event (button)
//     -the courseBox
//     --the courseBox
//     ---the courseBox
//     ----the exit button
//
// 2. what's the actual event (click mouse over)
//     -mouseover
//     --mouseout
//     ---click
//     ----click
//
// 3. what happens when the event happens
//     -the color of the courseBox box changes
//     --the color of the courseBox goes back to normal
//     ---the info panel shows up
//     update course name
//     update course description
//     change the picture
//
//     ----the info panel hides but keeps the data from
//         the last box the user cliked


document.addEventListener("DOMContentLoaded", () => {

    // this function makes the info panel hide on load
    let infoPanelBox = document.querySelector('#infopanel');
    infoPanelBox.style.display = "none";

    //funtion shows info panel, updates course name, info, and image based off click event
    let showPanel = (x) => {

        console.log(x);

        let p = document.querySelector('#courseName')

        let panel = document.querySelector('#infopanel')
        console.log(panel);
        panel.style.display = "block";

        let courseName = document.querySelector('#courseName')
        console.log(courseName)
        courseName.textContent = "CST 252"

        let courseDescription = document.querySelector('#courseDescription')
        console.log(courseDescription)
        courseDescription.textContent = "JavaScript"

        let courseImage = document.querySelector('#courseimage')
        console.log(courseImage);
        courseImage = document.querySelector('#courseimage').src="img/cst252.jpg";
    }

    //allows user to click on the box and trigger the info panel to show up on screen
    let cst252Box = document.querySelector('.itembox');
    cst252Box.addEventListener('click', showPanel);

    //function created to close the info panel
    let closeThePanel = () => {
        let panel = document.querySelector('#infopanel');
        panel.style.display = "none";
    }

    //makes the exit button on the top right hide the whole info panel
    let exitButtonClose = document.querySelector('#exitbutton')
    exitButtonClose.addEventListener('click', closeThePanel);

    //This is for the mouseover and mouseout events
    document.querySelector('.itembox').onmouseover = function() {mouseOver()};
    document.querySelector('.itembox').onmouseout = function() {mouseOut()};

    function mouseOver() {
      document.querySelector('.itembox').style.borderColor = "lightblue";
    }

    function mouseOut() {
      document.querySelector('.itembox').style.borderColor = "grey";
    }
});
