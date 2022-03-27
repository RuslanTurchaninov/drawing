// Adding erase button in div
const body = document.querySelector('body');
const divForButton = document.createElement('div');

divForButton.classList.add('btn-div');
body.appendChild(divForButton);

const button = document.createElement('button');
button.classList.add('btn');
button.textContent = "Erase"

divForButton.appendChild(button);

// Adding lots of divs
const divInBody = document.createElement('div');
divInBody.classList.add('container');
body.appendChild(divInBody);

const squareDiv = document.querySelectorAll('.square');

function createDivs(n) {
    n = Math.min(Math.max(parseInt(n), 1), 100);
    console.log(n);
    for (let i = 0; i < n**2; i++) { //256
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        divInBody.appendChild(squareDiv);
    };

    let divWidth = 320/n;
    let divHeight = 320/n;
    const squareDiv = document.querySelectorAll('.square');
    squareDiv.forEach((square) => {
        square.style.width = divWidth + 'px';
        square.style.height = divHeight + 'px';
    })

    squareDiv.forEach((square) => {
        // square.setAttribute('width', divWidth)
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "red";
        });
});
}

createDivs(16)

button.addEventListener('click', () => {
    while(divInBody.firstChild) {
        divInBody.removeChild(divInBody.firstChild);
    };
    createDivs(prompt('number', ''))
});

// Changing background color on hover
// const squareDiv = document.querySelectorAll('.square');

// squareDiv.forEach((square) => {
//     square.addEventListener('mouseover', () => {
//         square.style.backgroundColor = "red";
//     });
// });

// Adding functionality to button
squareDiv.forEach((square) => {
    button.addEventListener('click', () => {
        square.style.backgroundColor = "bisque";
    });
});