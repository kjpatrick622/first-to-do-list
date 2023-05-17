//selecting elements when we need them. cache in a var
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

//reusable function to find the length of the input
function inputLength() {
    return input.value.length;
}

function createListElement() {
    //creates a list element to append to the ul element
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //reinitializes the value to empty
    //creates button that is attached to the li
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Done!"));
    li.appendChild(button);
    button.onclick = lineThroughParent;
    //when button is clicked, it underlines the parent li

    //create another button to delete
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.onclick = removeParent;
    button.style.backgroundColor = "red";



}
//function that creates list element after click
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
//makes li element after enter is pressed. Must take event as parameter
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}
//function to toggle done class
function lineThroughParent(event) {
    event.target.parentNode.classList.toggle("done");
}

//function to remove parent li 
function removeParent(event) {
    event.target.parentNode.remove();
}

// adds event listener to listen for click/keypress
//takes the functions we made above as parameters
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




