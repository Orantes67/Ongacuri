import { musica } from "./dependencia.js";

function datos() {
  const image = document.getElementById("image");
  const cnom = document.getElementById("cnom");
  const drc = document.getElementById("drc");
  const music = document.getElementById("music");

  image.src = musica.listaDeReproduccion.current.data.getImg();
  cnom.textContent = musica.listaDeReproduccion.current.data.getCnom();
  drc.textContent = musica.listaDeReproduccion.current.data.getDrc();
  music.src = musica.listaDeReproduccion.current.data.getMusic();
}

document.addEventListener("DOMContentLoaded", function () {
  const avanzar = document.getElementById("btn-avanzar");
  const retroceder = document.getElementById("btn-retroceder");

  datos();
  avanzar.addEventListener("click", function () {
    musica.avanzarCancion();
    datos();
  });

  retroceder.addEventListener("click", function () {
    musica.retrocederCancion();
    datos();
  });
});
