 function RaceArea() {
     var container = document.getElementById("container1");
     // var text = "Artificial intelligence (AI) is intelligence exhibited by machines. In computer science, an ideal 'intelligent' machine is a flexible rational agent that perceives its environment and takes actions that maximize its chance of success at some goal.";
     var text = "Artificial intelligence";
     var that = this;
     this.textArr = text.split(" ");

     this.timer = document.getElementById(timer);
     this.car = document.getElementById("car");
     this.textArea = document.createElement("div");
     this.textArea.className = "textarea";

     for (var i in this.textArr) {
         var word = document.createElement("span");
         word.innerHTML = this.textArr[i] + " ";
         this.textArea.appendChild(word);
     }

     this.typeArea = document.createElement("input");
     this.typeArea.type = "text";
     this.typeArea.placeholder = "Type Here";
     window.onload = function() {
         that.typeArea.focus();
     };

     container.appendChild(this.textArea);
     container.appendChild(this.typeArea);

     this.time = 0;
     this.timerStart= function() {
         setInterval(function() {
             timer.children[1].innerHTML = that.time++;
         }, 1000);
     }
 }


 function Race(raceArea) {
     raceArea.timerStart();

     var position = 0;
     raceArea.textArea.children[position].style.color = "green";
     raceArea.textArea.children[position].style.textDecoration = "underline";

     function moveCar() {
         var percentCompleted = (position / raceArea.textArr.length) * 92;
         raceArea.car.style.left = percentCompleted + "%";
     }

     raceArea.typeArea.addEventListener("keypress", function(event) {
         if (event.keyCode == 32) {
             event.preventDefault();
             if (raceArea.typeArea.value != raceArea.textArr[position]) {
                 raceArea.typeArea.style.color = "red";
                 raceArea.textArea.children[position].style.color = "red";
             } else {
                 position++;
                 raceArea.typeArea.value = "";
                 raceArea.typeArea.style.color = "black";
                 try {
                     raceArea.textArea.children[position].style.color = "green";
                     raceArea.textArea.children[position].style.textDecoration = "underline";
                 } catch (err) {
                     console.log(err);
                 }

                 raceArea.textArea.children[position - 1].style.textDecoration = "none";
                 raceArea.textArea.children[position - 1].style.color = "black";
                 moveCar();
                 if (position == raceArea.textArr.length) {
                     setTimeout(function() {
                         window.alert("Typing Complete");
                     }, 1000);
                 }
             }
         }
     });
 }
