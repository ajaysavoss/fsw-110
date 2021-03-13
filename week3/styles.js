var i;
for(i = 0; i < 5; i++){

var header = document.createElement("h2");
header.textContent = "Howdy Earth";
document.body.append(header);

header.classList.add("border");

header.style.fontSize = "20px";
header.style.fontWeight = "lighter";
header.style.fontFamily = "sans-serif";
header.style.color = "cornflowerblue";

}