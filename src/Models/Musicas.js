import { Linkedlist } from "./Linkedlist.js";
import { Track } from "./Track.js";
import { Nodo } from "./Nodo.js";
export class Musicas {
  constructor() {
    this.listaDeReproduccion = new Linkedlist();
    this.agregarCancion();
  }
  agregarCancion() {
    for (let i = 0; i < 10; i++) {
      const nuevaCancion = new Track();
      nuevaCancion.setCnom(nuevaCancion.cargarCnom(i));
      nuevaCancion.setImg(nuevaCancion.cargarImg(i));
      nuevaCancion.setMusic(nuevaCancion.cargarMusic(i));
      nuevaCancion.setDrc(nuevaCancion.cargarDrc(i));
      this.listaDeReproduccion.añadirCabecera(nuevaCancion);
    }
  }

  //forward
  avanzarCancion() {
    if (
      this.listaDeReproduccion.current &&
      this.listaDeReproduccion.current.next
    ) {
      this.listaDeReproduccion.current = this.listaDeReproduccion.current.next;
      const nuevaCancion = this.listaDeReproduccion.current.data;
    }
  }

  //backward
  retrocederCancion() {
    if (
      this.listaDeReproduccion.current &&
      this.listaDeReproduccion.current.prev
    ) {
      this.listaDeReproduccion.current = this.listaDeReproduccion.current.prev;
      const nuevaCancion = this.listaDeReproduccion.current.data;
    }
  }
}
