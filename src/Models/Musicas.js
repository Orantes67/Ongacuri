import { Linkedlist } from "./Linkedlist.js";
import { Track } from "./Track.js";
export class Musicas {
  agregarCancion(cargarMusic, cargarImg,cargarDrc,cargarCnom) {
    const track = new Track();
    track.setCnom();
    track.setImg();
    const linkedlist = new Linkedlist();
    linkedlist.añadirCola(track);
    const ultimaCancion = linkedlist.tail.data;
    const cancionImg = document.querySelector(); //imagen
    cancionImg.src = ultimaCancion.getImagen();
    const tituloCancion = document.querySelector();
    tituloCancion.textContent = ultimaCancion.getNombre();
  }
  avanzarCancion() {
    const linkedlist = Linkedlist();
    if (linkedlist.head) {
      linkedlist.head = linkedlist.head.next;
      const nuevaCancion = linkedlist.head.data;
      const cancionImg = document.querySelector();
      cancionImg.src = nuevaCancion.getImagen();
      const tituloCancion = document.querySelector();
      tituloCancion.textContent = nuevaCancion.getNombre();
    }
  }
}
