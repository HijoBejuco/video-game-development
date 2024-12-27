
function selectCharacter() {
    alert("You choosed your character")
}


// This creates the variable, using the getElementById
// Here, we bring the element (button) from the html file
// In this case, we bring the "select_character_button" button,
// so we know exactly what's going on with it.
// Here the class document, represents the whole html file, so
// we can access to any element in the html file.
let characterSelectionButton = document.getElementById("select_character_button")

// Once we created the button variable, it has some methods,
// like the listener when click, also we should pass to it 
// the function we want to excecute. 
characterSelectionButton.addEventListener("click", selectCharacter)

