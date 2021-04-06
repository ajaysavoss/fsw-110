var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById("button");
var form = document. getElementById("form");
var list = document.getElementById("list");
var todo = [];

var addItem = (e) => {
  e.preventDefault()
  if(input1.value != ""){
    var li = document.createElement("li");
    
    var btn = document.createElement("button");
    btn.textContent =  "Completed";
    btn.classList.add("del");
    li.innerHTML =  " " + input1.value + " Due date: " + input2.value;
    todo.push(li);
    li.append(btn);
    list.append(li);
    form.reset();
  }
};

button.addEventListener("click", addItem);

list.addEventListener("click", function(e){
  var btn = document.getElementsByClassName("del");
  for(i=0; i<btn.length; i++){
    if(e.target == btn[i]){
      let li = btn[i].parentNode;
      list.removeChild(li);
    }
  }
});