/**
 * Created by aviisekh on 9/14/16.
 */
var box = document.getElementById("box");


i=0;
var tempfunc = function (){
    i=i+1;
    box.style["margin-left"] = i + "px";
}
/*i=0;
var tempfunc = function(){
    console.log("hello");
}*/


var id ;
function startInterval() {
    clearInterval(id);
    console.log("id", id +" destroyed");
    id = setInterval(tempfunc, 10);
    console.log("id", id +" started");
}


var start = document.getElementById("start");
var stop = document.getElementById("stop");

stop.addEventListener("click", function(){
    console.log("id", id +" cleared");
    clearInterval(id);
});


start.addEventListener("click", function(){
    startInterval();
});