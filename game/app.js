
const model1 = document.getElementById("model1");
const model2 = document.getElementById("model2");

let model1Pos = 0;
let model2Pos = 0;


function fight(takeOrder) {
    if (takeOrder === "forward") {
        model1Pos += 10; 
        model1.style.transform = `translateX(${model1Pos}px)`;
    } else if (takeOrder === "backward") {
        model2Pos -= 10;
        model2.style.transform = `translateX(${model2Pos}px)`;
    }
}


function earthquake(event) {
    if (event.key === "ArrowRight") {
        fight("forward");
    } else if (event.key === "ArrowLeft") {
        fight("backward");
    }
}

window.addEventListener("keydown", earthquake);
