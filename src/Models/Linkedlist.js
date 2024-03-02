import { Nodo } from "./Nodo.js";
export class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  añadirCabecera(data) {
    const newNodo = new Nodo(data, this.head, null);
    if (this.head) {
      newNodo.next = this.head;
      this.head.prev = newNodo;
      this.head = newNodo;
    } else {
      this.head = newNodo;
      this.tail = newNodo;
    }
    this.size++;
  }
  añadirCola(data) {
    const newNodo = new Nodo(data, null, this.tail);
    if (this.tail) {
      newNodo.prev = this.tail;
      this.tail.next = newNodo;
      this.tail = newNodo;
    } else {
      this.tail = newNodo;
      this.head = newNodo;
    }
    this.size++;
  }
}
