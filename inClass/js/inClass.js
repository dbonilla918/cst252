//Make a variable that has an object in it
//Object is keeping track of 3 properties/items
/////name of the player: X
//In this case it will be "Link"

/////color of the tunic: green
//to begin with, the color will be "green"

/////number that displays how much health they have: 100hp
//


let Object ={
    name: "Daniel",
    age: '23'
}


///inClass lab

let player = {
    //Character Name
    name: "Link",
    //Color of the tunic
    color: 'green',
    //Displays remaining health number
    healthPoints: 100,
    backpack: [{item: "Small Health Potion"}, {item: "Long Sword"}]
};


//Make a function
//The function has 1 parameter called COLOR
//Name the function whatever you want
//It should set the player's tunic color to whatever the user inputs

function tunicColorChange (x){
    player.color = x
};



//Create a backpack
//Backpack =

function inventoryUpdate (item) {
    player.backpack.push(item);
    return player.backpack;
};


//------------------------------------------------------------------

//Creates a function that adds 1 to whatever is added in an array
function addOne (number) {
    return number + 1;
}

//Creating an annoymous fuction which adds previous fuction to it
let addOneVariable = (number) => {
    return number + 1;
}

//Declare an array with values to use IN the function
let array = [5, 6, 7, 8];

//Calls on the array previously created, and inputs numbers - try in console!
array.map(addOneVariable)
