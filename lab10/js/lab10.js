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
//         let highlightBoxFunc =
//
//
//     --the color of the courseBox goes back to normal
//

    //---the info panel shows up
        //update course name
        //update course description
        //change the picture

// document.addEventListener("DOMContentLoaded", () => {
//
// // all your code goes here!
//
//
//     //----closes the info panel
// });
// let panel = document.querySelector('#infopanel')



// let closePanel = (x) => {
//     console.log(closePanel);
//     infopanel.style.display = "none";
// };


// document.addEventListener("DOMContentLoaded", () => {
    //'#infopanel'.style.display = "none";

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

// });

//////////////////
