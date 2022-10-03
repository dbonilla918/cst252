//This function adds 22 to whatever number the user enters when calling the function
function bigCheese(y){
    var results = y + 22;
    return results;
}


//This is and annonymous function that subtracts 1 to whatever number the user enters when calling the function
let theBigFunc = (number) => {
    return number - 1;
}


//The array "array" is being declared and assigned some numbers
let array = [5, 6, 7, 8];


//This is calling for the array that we previously declared to be used within the function "theBigFunc"
console.log(array.map(theBigFunc))

//This is calling for the array that we previously declared to be used within the function "bigCheese"
console.log(array.map(bigCheese))
