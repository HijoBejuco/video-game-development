

function gameInitializer() {
    // This creates the variable, using the getElementById
    // Here, we bring the element (button) from the html file
    // In this case, we bring the "select_character_button" button,
    // so we know exactly what's going on with it.
    // Here the class document, represents the whole html file, so
    // we can access to any element in the html file.
    let characterSelectionButton = document.getElementById("select_character_button")

    // Once we created the button variable, it has some methods,
    // like the listener when click, also we should pass to it 
    // the function we want to excecute. So it excecutes the function
    // When the user makes click in the button.
    characterSelectionButton.addEventListener("click", selectCharacter)
}

function selectCharacter() {
    alert("You choosed your character")
}

// the window object represents the browser window, so here we 
// are telling the browser to excecute the gameInitializer function
// once the window is loaded.
window.addEventListener("load", gameInitializer)