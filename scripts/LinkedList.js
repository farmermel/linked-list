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

  push(data) {
    if(!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.head;

      while(current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.length++;
  }

  pop() {
    if(!this.length) {
      this.length = this.length
      return null;
    } 
      let current = this.head;
      let previous = this.head;

      if(!this.head.next) {
        this.head = null;
      }

      while(current.next != null) {
        previous = current;
        current = current.next;

      }
      let toReturn = current;

      previous.next = null;
      this.length--;
      return toReturn;
    
    
  }
}
