import{Linkedlist} from "./Linkedlist.js"
import {Track} from "./Track.js"
import { Nodo } from "./Nodo.js";
export class Musicas {
  constructor() {
    this.listaDeReproduccion = new Linkedlist();
  }
  agregarCancion(cargarMusic, cargarImg, cargarDrc, cargarCnom) {
    const nuevaCancion = new Track();
    nuevaCancion.cargarCnom(cargarCnom);
    nuevaCancion.cargarImg(cargarImg);
    nuevaCancion.cargarMusic(cargarMusic);
    nuevaCancion.cargarDrc(cargarDrc);
    this.listaDeReproduccion.añadirCola(nuevaCancion);
  }
  
  avanzarCancion() {
    if (this.listaDeReproduccion.head && this.listaDeReproduccion.head.next) {
      this.listaDeReproduccion.head = this.listaDeReproduccion.head.next;
      const nuevaCancion = this.listaDeReproduccion.head.data;
      const cancionImg = document.querySelector(".cancion_img");
      cancionImg.src = nuevaCancion.getImg();
      const tituloCancion = document.querySelector(".titul_cancion");
      tituloCancion.textContent = nuevaCancion.getCnom();
    }
  }
}
