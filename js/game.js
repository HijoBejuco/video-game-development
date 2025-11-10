

function gameInitializer() {
    /* This creates the variable, using the getElementById
    Here, we bring the element (button) from the html file
    In this case, we bring the "select_character_button" button,
    so we know exactly what's going on with it.
    Here the class document, represents the whole html file, so
    we can access to any element in the html file. */
    let characterSelectionButton = document.getElementById("select_character_button")

    // Once we created the button variable, it has some methods,
    // like the listener when click, also we should pass to it 
    // the function we want to excecute. So it excecutes the function
    // When the user makes click in the button.
    characterSelectionButton.addEventListener("click", selectCharacter)
}

/* In this function we use the "document" class to bring elements by their id from 
the HTML doc, and then verify if that particular radio button is checked by the user 
and modify the DOM depending on the selected character 

The .innerHTML property is used to modify the content inside the html element we have
selected. In this case, we modify the string inside the span with id "player-character"
*/
function selectCharacter() {

    let inputHipo = document.getElementById("Hipo")
    let inputCapi = document.getElementById("Capi")
    let inputRat = document.getElementById("Rat")
    let spanPlayerCharacter = document.getElementById("player-character")

    if (inputHipo.checked) {
        spanPlayerCharacter.innerHTML = "Hipo"
    }
    else if (inputCapi.checked) {
        spanPlayerCharacter.innerHTML = "Capi"
    }
    else if (inputRat.checked) {
        spanPlayerCharacter.innerHTML = "Rat"
    }
    // In case no character is selected, we alert the user.
    else {
        alert("you must select a character")
    }
}

/* the window object represents the browser window, so here we 
are telling the browser to excecute the gameInitializer function
once the window is completely loaded.*/
window.addEventListener("load", gameInitializer)