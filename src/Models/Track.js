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
    ]);
    return Mapear.get(posicion);
  }
  cargarImg(posicion) {
    let Mapear = new Map([
      [0,"../image/music1.jpg"],
      [1,"../image/music2.jpg"],
      [2,"../image/music3.jpg"],
      [3,"../image/music4.jpg"],
    ]);
    return Mapear.get(posicion);
  }
  cargarMusic(posicion) {
    let Mapear = new Map([
      [0,"../Audio/musica1.mp3"],
      [1,"../Audio/musica2.mp3"],
      [2,"../Audio/musica3.mp3"],
      [3,"../Audio/musica4.mp3"],
    ]);
    return Mapear.get(posicion);
  }
  cargarDrc(posicion) {
    let Mapear = new Map([[0,"4:42"], [1,"4:24"], [2,"4:46"], [3,"4:32"]]);
    return Mapear.get(posicion);
  }
}
