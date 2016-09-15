/**
 * Created by aviisekh on 9/14/16.
 */
var images = document.getElementById("image-wrapper");
console.log(images.offsetWidth);
var interval;
i = 0;
var direction = "left";

var move = function () {

    if (i < -2800) {
        direction = "right";
    } else if (i >= 0) {
        direction = "left";
    }

    i = direction == "left" ? i - 5 : i + 5;

    images.style["margin-left"] = i + "px";
    if (i % 700 == 0) {
        stopInterval();

        setTimeout(function () {
            startInterval()
        }, 1000);
    }

    console.log(i);
}


function startInterval() {
    clearInterval(interval);
    interval = setInterval(move, 2);
    console.log("id", interval + " started");
}

function stopInterval() {
    clearInterval(interval);
}


var start = document.getElementById("start");
var stop = document.getElementById("stop");

stop.addEventListener("click", function () {
    console.log("id", interval + " cleared");
    clearInterval(interval);
});


start.addEventListener("click", function () {
    startInterval();
});