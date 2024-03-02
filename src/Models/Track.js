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
  cargarCnom() {
    newnom=[]
  }
  cargarImg() {
    let Mapear = new Map([
        ['../image/music1.jpg'],['tomates'],['cebollas']
      ]);
      for (let img of Mapear.keys()) {
        
      }
  }
  cargarMusic() {
    const musica = "../Audio";
    newmusic=[]
  }
  cargarDrc(){
    newdrc=[]
  }
  
}
