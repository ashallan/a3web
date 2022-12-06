/////////////// Section : Javascript Clock //////////////////////
// * Owner : Adrian Koornneef
// * Date  : 2022-12-06
// * From  : https://codepen.io/Tcip/pen/BNKjeN
//           https://flexiple.com/javascript/javascript-clock/
//           https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
//            https://www.w3schools.com/jsref/event_onclick.asp
/////////////////////////////////////////////////////////////////
  
function myFunction() {
  document.getElementById("p2").innerHTML = "There's lots to explore..";
  document.getElementById("p3").innerHTML = "But don't lose track of time!";
  
  var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var timeVariable = new Date();
  document.getElementById("clock").innerHTML = timeVariable.toLocaleTimeString();
  document.getElementById("showDate").innerHTML = timeVariable.toLocaleDateString();
}
}
