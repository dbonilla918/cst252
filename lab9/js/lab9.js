document.addEventListener("DOMContentLoaded", () => {
    console.log('it shows results as you type');
    //decide which event (click)
    //what is happening to "button"
    //what happend

    //Creates a button that changes the text to white and writes it in the log
    let buttonW = document.querySelector('#btnW');

    let handler = () => {
      console.log('You changed the text to white!');
      let header = document.querySelector('h1');
      header.style.color = 'white';
    };

    buttonW.addEventListener('click', handler);

    //Creates a button that changes the text to black and writes it in the log
    let buttonBK = document.querySelector('#btnBK');

    let handler2 = () => {
      console.log('You changed the text to black!');
      let header = document.querySelector('h1');
      header.style.color = 'black';
    };

    buttonBK.addEventListener('click', handler2);
});
