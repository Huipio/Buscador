let cont;
let buscador = document.getElementById("search");
let textoLogo = document.getElementById("textoLogo");
buscador.addEventListener("keyup", function () {
  let cont = 0;
  Array.from(document.getElementsByTagName("p")).forEach(element => {
    if (element.innerHTML.includes(buscador.value)) {
      let texto = element.innerText;
      texto.replaceAll(buscador.value, '<span style="background-color: yellow">' + buscador.value + '</span>');
      element.innerText = texto;
      cont = cont++;
    }
  });
  textoLogo.text = "Se encontraron " + cont + " elementos";
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});

// Or with jQuery

$(document).ready(function () {
  $('.parallax').parallax();
});