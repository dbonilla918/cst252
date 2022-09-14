function flowerFunction() {
	//initialize();

	//YOUR CODE GOES RIGHT HERE

	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;
	document.querySelector("#flower5 .center").style.backgroundColor = 'white'
	document.querySelector("#flower5 .center").style.color = 'red';

	//these lines of ccode change the vertical positio of all the flowers
	document.querySelector(`#flower1`).style.marginTop = "0px";
	document.querySelector(`#flower2`).style.marginTop = "0px";
	document.querySelector(`#flower3`).style.marginTop = "0px";
	document.querySelector(`#flower4`).style.marginTop = "0px";
	document.querySelector(`#flower5`).style.marginTop = "0px";

	//this code changes the first flower to say hi
	document.querySelector('#flower1 .center').textContent = "hi";
	//this code changes the third flower to say 2
	document.querySelector('#flower3 .center').textContent = "2";
	//this code changes the first flower to say hi2
	document.querySelector('#flower5 .center').textContent = "hi2";

	//This line of code changes the left petal of flower 5 from orange to lightblue
	document.querySelector("#flower5 .petal").style.backgroundColor = 'lightblue'
	//This line of code changes the right petal of flower 5 from orange to pink
	document.querySelector("#flower5 .rightPetal").style.backgroundColor = 'pink'


	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();



}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}
