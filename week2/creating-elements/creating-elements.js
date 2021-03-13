const elem = document.createElement('h1');
const elemText = document.createTextNode("Welcome to my JS site");
elem.appendChild(elemText);

const p = document.createElement('p');
const pText = document.createTextNode("All of this was created with Javascript");
p.appendChild(pText);



console.log(document);