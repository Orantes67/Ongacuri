export class Track {
  #Drc;
  #Cnom;
  #Img;
  #Music;
  setCnom(Cnom) {
    this.#Cnom = Cnom;
  }
  getCnom() {
    return this.#Cnom;
  }
  setImg(Img) {
    this.#Img = Img;
  }
  getImg() {
    return this.#Img;
  }
  setDrc(Drc) {
    this.#Drc = Drc;
  }
  getDrc() {
    return this.#Drc;
  }
  setMusic(Music) {
    this.#Music = Music;
  }
  getMusic() {
    return this.#Music;
  }
  cargarCnom(posicion) {
    let Mapear = new Map([
      [0,"Junior H - 1004 Kilómetros"],
      [1,"Junior H - Cherekon"],
      [2,"Junior H - Yo voy amarte"],
      [3,"Junior H - Naci para amarte"],
      [4,"Ariel Camacho - Hablemos"],
      [5,"Ariel Camacho - Arrodillate"],
      [6,"Eliseo Robles - El señor de las canas"],
      [7,"Ariel Camacho - Nadie es eterno"],
      [8,"Los cadetes de linares - No hay novedad"],
      [9,"Ariel Camacho y Marca registrada - La vida ruina"],
    ]);
    return Mapear.get(posicion);
  }
  cargarImg(posicion) {
    let Mapear = new Map([
      [0,"src/image/music1.jpg"],
      [1,"src/image/music2.jpg"],
      [2,"src/image/music3.jpg"],
      [3,"src/image/music4.jpg"],
      [4,"src/image/music5.jpg"],
      [5,"src/image/music6.jpg"],
      [6,"src/image/music7.jpg"],
      [7,"src/image/music8.jpeg"],
      [8,"src/image/music9.jpeg"],
      [9,"src/image/music10.jpeg"],
    ]);
    return Mapear.get(posicion);
  }
  cargarMusic(posicion) {
    let Mapear = new Map([
      [0,"src/Audio/musica1.mp3"],
      [1,"src/Audio/musica2.mp3"],
      [2,"src/Audio/musica3.mp3"],
      [3,"src/Audio/musica4.mp3"],
      [4,"src/Audio/musica5.mp3"],
      [5,"src/Audio/musica6.mp3"],
      [6,"src/Audio/musica7.mp3"],
      [7,"src/Audio/musica8.mp3"],
      [8,"src/Audio/musica9.mp3"],
      [9,"src/Audio/musica10.mp3"],
    ]);
    return Mapear.get(posicion);
  }
  cargarDrc(posicion) {
    let Mapear = new Map([[0,"4:42"], [1,"4:24"], [2,"4:46"], [3,"4:32"], [4,"3:09"], [5,"3:20"],[6,"2:55"],[7,"4:05"],[8,"3:05"],[9,"3:34"]]);
    return Mapear.get(posicion);
  }
}
