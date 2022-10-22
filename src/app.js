/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronombres = ["el", "nuestro"];
  let adjetivos = ["aburrido", "alegre", "debil"];
  let nombre = ["animal", "marciano"];

  for (let i = 0; i < pronombres.length; i++) {
    for (let q = 0; q < adjetivos.length; q++) {
      for (let w = 0; w < nombre.length; w++) {
        console.log(pronombres[i] + adjetivos[q] + nombre[w] + ".com");
      }
    }
  }
};
