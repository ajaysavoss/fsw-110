const someIdentifier = document.someIdentifier
someIdentifier.append("Welcome to my JS site");

const p = document.p
p.appendChild("All of this was created with Javascript");

var newListItem = document.createElement('li');
newListItem.textContent = "D"
var myList = document.getElementById('ol');
myList.appendChild(newListItem);

console.log(document);