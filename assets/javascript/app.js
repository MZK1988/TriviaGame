//when start button clicks, initiate timer


window.onload = stop();
$("#startButton").on("click", run)

var number = 120;
var intervalID;
console.log(number);
function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").html("<strong>" +"Time Left:" + number + "</strong>")
    if (number === 0) {
        stop();
        alert("Your time is up");
    }
}

function stop() {
    clearInterval(intervalID);
}

run();

