let container = document.querySelector(".container");
const circleColors = ["red", "#5fd35f", "blue", "#c312c3", "#a256a2", "#59ebdd"];

function createCircles(numberOfCircles, left, top) {
    for (let i = 0; i < numberOfCircles; i++) {
        container.innerHTML += `<div class="circle"></div>`;
        let circles = document.querySelectorAll(".circle");
        let randomSize = Math.round(Math.random() * (200 - 100) + 100) + "px";
        console.log('randomSize', randomSize)
        circles[i].style.left = left ? `${left}px` : Math.round(Math.random() * (window.innerWidth + 200) - 200) + "px";
        circles[i].style.top = top ? `${top}px` : Math.round(Math.random() * (window.innerHeight + 200) - 200) + "px";
        circles[i].style.height = randomSize;
        circles[i].style.width = randomSize;
    }
}


function colorCircles() {
    
    let randomCircleColorIndex = Math.floor(Math.random() * circleColors.length);

    let circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        circle.style.background = circleColors[randomCircleColorIndex];
    });
}

function animateCircles() {
    let circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        circle.style.left = Math.round(Math.random() * (window.innerWidth + 200) - 200) + "px";
        circle.style.top = Math.round(Math.random() * (window.innerHeight + 200) - 200) + "px";
    });
}


// function animateCircles() {
//     let circles = document.querySelectorAll(".circle");

//     let xPosition = 1;
//     let yPosition = 1;
//     circles.forEach(circle => {
//         xPosition = circle.style.left;
//         yPosition = circle.style.top;
//         console.log('xPosition', xPosition)
//         // console.log('xPosition', xPosition)
//         if (xPosition < (window.innerWidth - 100)) {
//             xPosition += 1;
//         } else {
//             xPosition -= 1;
//         }
//         if (yPosition < (window.innerHeight - 100)) {
//             yPosition += 1;
//         } else {
//             yPosition -= 1;
//         }
//     });
//     createCircles(40, xPosition, yPosition);
// }


function init() {
    createCircles(60);

    setInterval(() => {
        animateCircles()
    }, 3000);
    // animateCircles(40);
}

window.onload = init;

setInterval(() => {
    colorCircles()
}, 15000);