const buttonAdd = document.getElementById("add-list");
const list = document.getElementById("list");
const body = document.body;
const buttonRemove = document.getElementById("remove");
const h1 = document.createElement("h1");
const ul = document.createElement("ul");

document.body.style.backgroundColor = "lightblue";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
document.body.style.padding = "20px 10px 20px 10px";
document.body.style.margin = "0";
document.body.style.fontSize = "18px";
document.body.style.justifyContent = "center";

h1.style.fontFamily = "sans-serif";
h1.style.padding = "20px 0 20px 0";

buttonAdd.style.margin = "10px 0 10px 0";
buttonAdd.style.padding = "10px 20px";
buttonAdd.style.borderRadius = "5px";
buttonAdd.style.fontSize = "18px";
buttonAdd.style.border = "none";
buttonAdd.style.backgroundColor = "gray";

buttonRemove.style.margin = "10px 0 10px 0";
buttonRemove.style.padding = "10px 20px";
buttonRemove.style.borderRadius = "5px";
buttonRemove.style.fontSize = "18px";
buttonRemove.style.border = "none";
buttonRemove.style.backgroundColor = "gray";

function addList() {
  const text = prompt("enter your list");
  const textNode = document.createTextNode(text);
  const listNode = document.createElement("li");

  listNode.appendChild(textNode);
  list.appendChild(listNode);
}

function removeList() {
  list.innerHTML = "";
}

buttonRemove.addEventListener("click", removeList);

buttonAdd.addEventListener("click", addList);
