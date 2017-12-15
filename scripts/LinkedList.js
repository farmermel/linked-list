import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    if(!this.head) {
      this.head = new Node(data);
    } else {
      let oldHead = this.head;
      this.head = new Node(data); 
      this.head.next = oldHead;
    }
    this.length++;
  }

  shift() {
    if(!this.length) {
      return null;
    }
    let currentHead = this.head;
    this.head = this.head.next;
    return currentHead;
  }

  push() {
    
  }
}
