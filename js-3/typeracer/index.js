 var container = document.getElementById("container1");
 // var text = "Artificial intelligence (AI) is intelligence exhibited by machines. In computer science, an ideal 'intelligent' machine is a flexible rational agent that perceives its environment and takes actions that maximize its chance of success at some goal.";
 var text = "Artificial intelligence";
 var textArr = text.split(" ");

 var car = document.getElementById("car");
 var textArea = document.createElement("div");
 textArea.className = "textarea";


 for (var i in textArr) {
     var word = document.createElement("span");
     word.innerHTML = textArr[i] + " ";
     textArea.appendChild(word);
 }


 var typeArea = document.createElement("input");
 typeArea.type = "text";
 typeArea.placeholder = "Type Here";
 window.onload = function() {
     typeArea.focus();
 };

 container.appendChild(textArea);
 container.appendChild(typeArea);

 var position = 0;
 textArea.children[position].style.color = "green";
 textArea.children[position].style.textDecoration = "underline";

 typeArea.addEventListener("keypress", function(event) {
     if (event.keyCode == 32) {
         event.preventDefault();
         if (typeArea.value != textArr[position]) {
             typeArea.style.color = "red";
             textArea.children[position].style.color = "red";
         } else {
             position++;
             typeArea.value = "";
             typeArea.style.color = "black";
             try {
                 textArea.children[position].style.color = "green";
                 textArea.children[position].style.textDecoration = "underline";
             } catch (err) {
                 console.log(err);
             }
             
             textArea.children[position-1].style.textDecoration = "none";
             textArea.children[position-1].style.color = "black";

             var percentCompleted = (position / textArr.length) * 92;
             car.style.left = percentCompleted + "%";

             if (position == textArr.length) {
                 setTimeout(function() {
                     window.alert("Typing Complete");
                 }, 1000);
             }
         }
     }
 });
