/**
 * Created by aviisekh on 9/14/16.
 */


function Slider(imageWrapper) {
    var RIGHT = "right";
    var MARGIN_OFFSET = 5;

    var images = document.getElementsByClassName("image-wrapper");
    var progressBar = document.getElementsByClassName("progress-bar")[0];
    var numberOfImages = imageWrapper.getElementsByTagName("img").length;
    var sliderWidth = parseInt(window.getComputedStyle(imageWrapper.parentNode, null).getPropertyValue('width'));
    
    var interval;
    var margin = 0;
    var direction = "left";

    function setDots(){
        
    }

    var move = function() {
        
        margin = direction == "left" ? margin - 5 : margin + 5;
        imageWrapper.style["margin-left"] = margin + "px";

        if (margin < -(sliderWidth*(numberOfImages-1))) {
            direction = "right";
        } else if (margin >= 0) {
            direction = "left";
        }

        if (margin % sliderWidth === 0) {
            console.log(margin);
            stopInterval();

            setTimeout(function() {
                startInterval();
            }, 1000);
        }

        // console.log(i);
    };

    function startInterval() {
        clearInterval(interval);
        interval = setInterval(move, 2);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    startInterval();
 
}

// var slider = new Slider();

// var slider1 = new Slider(document.getElementsByClassName("image-wrapper")[0]);
// var slider2 = new Slider(document.getElementsByClassName("image-wrapper")[1]);