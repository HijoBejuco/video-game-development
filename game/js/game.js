
function selectCharacter() {
    alert("You choosed your character")
}


// This creates the variable, using the getElementById
// Here, we bring the element (button) from the html file
let characterSelectionButton = document.getElementById("select_character_button")

// Once we created the button variable, it has some methods,
// like the listener when click, also we should pass to it 
// the function we want to excecute. 
characterSelectionButton.addEventListener("click", selectCharacter)

