/**
 * Created by aviisekh on 9/14/16.
 */
var box = document.getElementById("box");
// var boxStyle = window.getComputedStyle(box);

// i=5;

/*var tempfunc = function (){
    i=i+1;
    box.style["margin-left"] = i + "px";
}*/

i=0;
var tempfunc = function(){
    i=i+1;
    console.log("hello",i++);
}

var id ;
function startInterval() {
    id = setInterval(tempfunc, 100);
}

// var id = setInterval(tempfunc,1000);

// var id = setInterval(tempfunc,1);



var start = document.getElementById("start");
var stop = document.getElementById("stop");

stop.addEventListener("click", function(){
    clearInterval(id)
});


start.addEventListener("click", function(){
    startInterval(id)
});