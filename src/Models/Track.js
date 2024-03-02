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
  setMusic() {
    this.#Music = Music;
  }
  getMusic() {
    return this.#Music;
  }
  cargarCnom(posicion) {
    let Mapear = new Map([
      ["Junior H - 1004 Kilómetros"],
      ["Junior H - Cherekon"],
      ["Junior H - Yo voy amarte"],
      ["Junior H - Naci para amarte"],
    ]);
    return Mapear.get(posicion);
}
  cargarImg(posicion) {
    let Mapear = new Map([
      ["../image/music1.jpg"],
      ["../image/music2.jpg"],
      ["../image/music3.jpg"],
      ["../image/music4.jpg"],
    ]);
    return Mapear.get(posicion)
  }
  cargarMusic() {
    let Mapear = new Map([
      ["../Audio/musica1.mp3"],
      ["../Audio/musica2.mp3"],
      ["../Audio/musica3.mp3"],
      ["../Audio/musica4.mp3"],
    ]);
   
  }
  cargarDrc() {
    let Mapear = new Map([["4:42"], ["4:24"], ["4:46"], ["4:32"]]);
    for (let drc of Mapear.keys()) {
      return drc;
    }
  }
}
