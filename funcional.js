function color(_numero) {
  let numNaranja = document.querySelector(_numero);
  let uno = document.querySelector(".numero1");
  let dos = document.querySelector(".numero2");
  let tres = document.querySelector(".numero3");
  let cuatro = document.querySelector(".numero4");
  let cinco = document.querySelector(".numero5");
  let numAlmacenado;

  switch (numNaranja) {
    case uno:
      uno = document.querySelector(".numero1").style.background =
        "var(--Orange)";
      dos = document.querySelector(".numero2").style.background = "#2f3743";
      tres = document.querySelector(".numero3").style.background = "#2f3743";
      cuatro = document.querySelector(".numero4").style.background = "#2f3743";
      cinco = document.querySelector(".numero5").style.background = "#2f3743";      
      localStorage.setItem("numero", "1");

      break;
    case dos:
      dos = document.querySelector(".numero2").style.background =
        "var(--Orange)";
      uno = document.querySelector(".numero1").style.background = "#2f3743";
      tres = document.querySelector(".numero3").style.background = "#2f3743";
      cuatro = document.querySelector(".numero4").style.background = "#2f3743";
      cinco = document.querySelector(".numero5").style.background = "#2f3743";
      localStorage.setItem("numero", "2");
      break;
    case tres:
      tres = document.querySelector(".numero3").style.background =
        "var(--Orange)";
      dos = document.querySelector(".numero2").style.background = "#2f3743";
      uno = document.querySelector(".numero1").style.background = "#2f3743";
      cuatro = document.querySelector(".numero4").style.background = "#2f3743";
      cinco = document.querySelector(".numero5").style.background = "#2f3743";
      localStorage.setItem("numero", "3");      
      break;

    case cuatro:
      cuatro = document.querySelector(".numero4").style.background =
        "var(--Orange)";
      dos = document.querySelector(".numero2").style.background = "#2f3743";
      tres = document.querySelector(".numero3").style.background = "#2f3743";
      uno = document.querySelector(".numero1").style.background = "#2f3743";
      cinco = document.querySelector(".numero5").style.background = "#2f3743";
      localStorage.setItem("numero", "4");
      break;

    case cinco:
      cinco = document.querySelector(".numero5").style.background =
        "var(--Orange)";
      dos = document.querySelector(".numero2").style.background = "#2f3743";
      tres = document.querySelector(".numero3").style.background = "#2f3743";
      cuatro = document.querySelector(".numero4").style.background = "#2f3743";
      uno = document.querySelector(".numero1").style.background = "#2f3743";
      localStorage.setItem("numero", "5");
      break;
  }
}
let numStorage = localStorage.getItem("numero");
let mensaje = "you selected  " + numStorage + " out of 5";
let repuesta = (document.querySelector(".respuesta").innerHTML = mensaje);
