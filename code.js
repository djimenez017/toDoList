let addButton = document.getElementById("inputButton");
let toDoList = document.getElementById("toDoContainer");
let inputValue = document.getElementById("inputText");

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let paragraph = document.createElement("li");

  if (inputValue.value) {
    paragraph.innerText = inputValue.value;
    toDoList.appendChild(paragraph);
    inputValue.value = " ";
    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
      paragraph.style.textDecorationColor = "red";
    });
  } else {
    alert("Please enter an item to your list");
  }
});
