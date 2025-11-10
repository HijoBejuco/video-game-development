# video-game-development
Video game construction using HTML, Javascript.

## Workflow

1. The ```window.addEventListener("load", gameInitializer)``` line, excecutes the js functions when the browser window is loaded.
2. **gameInitializer()** function: this charges all the needed connections and functions to run the page (game)
3. The player selects one of the available characters.
4. The game selects randomly the enemy character. 

## Game Description
This game will be called "Mokepon". It's a very simple game, where we fight using different characters (fire, water, earth)

This is a very simple webpage, that simulates fights between three characters. Each of these 3 characters has an element speciality (fire, water, earth), so the fighting between them is a very simple conditional. 

* water kills fire
* fire kills earth
* earth kills water

So the process for interacting with the page is: 
* Selecting the character (Hipo, Capi, Rat)
* Selecting the element (fire, water, earth)



# HTML markups guide

* < strong > This is for Bolding text < /strong >
* **< meta charset="utf-8" />**: This allows to add ñ and special characters
* **Creating a button:**
    * the correct way of creating a button is putting the **button** markup inside a paragraph markup: 

    < p > < button > This is a button </ button > < /p >
* **DOM:** Document Object Model, is a representation in memory of the HTML page, which let js read and modify the content, structure and style of the page. 
* < span > This is used for make the text dinamic. So we can modify the text -using js- inside the span, depending on the excecution, like a variable.



# JAVASCRIPT Notes 
* **Creating a variable:** use the prefix let and then declare the variable (let variable_name = 1)
* **Ask the user to entry a variable:** use the "prompt" command. ej. *name = prompt("what's your name?")*

