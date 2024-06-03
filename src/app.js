/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// paso 0 creo mi función asignandole un nombre en este caso "onload"

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Primer paso creo mis variables en este caso cuatros les asigno nombre y entre los cochete
  // Escribo las palabras que quiero ver las coloco entre comillas y comas.

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Segundo paso creo mi array con mi variable fija "const" asignandole un nombre.
  // dentro de la variable "cont"creo una variable "let" con el nombre numeros aleatorios y la pongo a igual a Math.random().
  // uso el codigo Math.random() para que de palabras o numero aleatorios.
  // llamo a las variables que cree antes y les pongo igual Math.floor().
  // dentro de Math.floor llammo a la variable que cree igual a Math.random y la multiplico.
  // por el nombre y largo de cada variable creada anterior.
  // segun voy creando estas se van activando las de arriba. las primeras de cree.
  // les asigno un nuevo nombre indice+nombre la variable creada al principio.

  const generadorDeEscusas = () => {
    let numerosAleatoriosdecimal = Math.random();
    let indiceWho = Math.floor(numerosAleatoriosdecimal * who.length);
    let indiceAction = Math.floor(numerosAleatoriosdecimal * action.length);
    let indiceWhat = Math.floor(numerosAleatoriosdecimal * what.length);
    let indiceWhen = Math.floor(numerosAleatoriosdecimal * when.length);

    // creo estas variales para obtener la palabra de cada array de forma aleatoria

    let palabraWho = who[indiceWho];
    let palabraAction = action[indiceAction];
    let palabrawhat = what[indiceWhat];
    let palabrawhen = when[indiceWhen];

    // creo una nueva variable con un nuevo nombre para usarla despues en el return para que me de la frace completa

    let fraceCompleta =
      palabraWho + "" + palabraAction + "" + palabrawhat + "" + palabrawhen;

    return fraceCompleta;
  };
  // dentro de los paréntesis de console.log llamo a mi variable fija const

  console.log(generadorDeEscusas());

  document.querySelector("#excuse").innerHTML = generadorDeEscusas();
};
