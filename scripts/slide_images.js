const images = document.querySelectorAll(".container-images .slide");
const leftArrow = document.querySelector(".container-images .buttons .left");
const rightArrow = document.querySelector(".container-images .buttons .right");

let numberImages = 10;
let index = 0;
let imageSelected = images[index];

window.onload = setInterval(changeImageRight, 5000);

leftArrow.addEventListener("click", changeImageLeft);
rightArrow.addEventListener("click", changeImageRight);

function changeImageLeft() {
    if(index > 0) {
        index--;
    } else {
        index = numberImages - 1;
    }
    imageSelected.style.opacity = "0";
    imageSelected = images[index];
    imageSelected.style.opacity = "1";
}

function changeImageRight() {
    if(index < numberImages - 1) {
        index++;
    } else {
        index = 0;
    }
    imageSelected.style.opacity = "0";
    imageSelected = images[index];
    imageSelected.style.opacity = "1";
}

console.log("The most beautiful website of the world");