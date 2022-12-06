/////////////// Section : Javascript Clock //////////////////////
// * Owner : Adrian Koornneef
// * Date  : 2022-12-06
// * From  : https://codepen.io/Tcip/pen/BNKjeN
//           https://flexiple.com/javascript/javascript-clock/
//           https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
/////////////////////////////////////////////////////////////////
  
  var myVar = setInterval(function() {
    myTimer();
  }, 1000);
 
  function myTimer() {
    var timeVariable = new Date();
    document.getElementById("clock").innerHTML = timeVariable.toLocaleTimeString();
    document.getElementById("showDate").innerHTML = timeVariable.toLocaleDateString();
  }
