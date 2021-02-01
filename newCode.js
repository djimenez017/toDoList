let button = document.getElementById("inputButton");
let list = document.getElementById("toDoContainer");
let inputValue = document.getElementById("inputText");

let toDoList = [];
let localList = window.localStorage;

//capture the input of the input field and add it to the toDoList
function handleClick(e) {
  e.preventDefault();
  //make sure that there is content in the field prior to adding.
  if (inputValue.value) {
    toDoList.push(inputValue.value);
    inputValue.value = " ";
  } else {
    alert("There must be something to do today");
  }
  return toDoList;
}

//Push the items in toDoList to windows.localStorage
console.log(toDoList);
let newList = [...toDoList];
localList.setItem("To do:", newList);
//map thorught the items in toDoList and generate a new list item
//add a remove button
//add a delete all where there are items in the list
//press to mark as complete.

button.addEventListener("click", handleClick);
