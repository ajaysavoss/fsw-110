function add() {
    var num1= document.getElementById("num1").value;
    var num2= document.getElementById("num2").value;
    var addResult= +num1 + +num2;
    document.getElementById("result").innerHTML = "The answer is: " +addResult;
    
  }

  function sub() {
    var num3= document.getElementById("num3").value;
    var num4= document.getElementById("num4").value;
    var subResult= +num3 - +num4;
    document.getElementById("result").innerHTML = "The answer is: " +subResult;
    
  }

  function multiply() {
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;
    var mulResult = +num5 * +num6;
    document.getElementById("result").innerHTML = "The answer is: " + mulResult;
  }