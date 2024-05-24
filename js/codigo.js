function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function eleccion(numero_elegido) {
    let resultado = ""
    if(numero_elegido == 1) {
        resultado = "piedra 🪨"
    } else if (numero_elegido == 2) {
        resultado = "papel 📃"
    } else if (numero_elegido == 3) {
        resultado = "tijera ✂️"
    } else {
        resultado = "PERDER"
    }
    return resultado
  }

  function combate(jugador, pc) {
    // Fuction for simmulating the combat of 
    // rock paper scissors
    let resultado = ""
    if (pc == jugador) {
      resultado = "EMPATA"
    } else if (jugador == 1 && pc == 3) {
      resultado = "GANA"
    } else if (jugador == 2 && pc == 1) {
      resultado = "GANA"
    } else if (jugador == 3 && pc == 2) {
      resultado = "GANA"
    } else {
      resultado = "PIERDE"
    }
    return resultado
  }

  let jugador = 0
  let contador_ganancias = 0

  while(contador_ganancias < 3) {
    
    // Siga jugando hasta que se ganen 3 veces
    let pc = aleatorio(1,3)
    alert("El PC elige: " + eleccion(pc))
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    alert("El jugador elige: "+ eleccion(jugador))
    // Combat result
    let resultado = combate(jugador, pc)
    alert("El jugador " + resultado)

    if(resultado == "GANA") {
      contador_ganancias = contador_ganancias + 1
    }
    alert("el contador va en: " + contador_ganancias)

  }

