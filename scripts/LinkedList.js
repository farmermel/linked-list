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

  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if(currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }
    return foundNode;
  }

  delete(data) {
    if(this.head.data === data) {
      this.length--;
      this.head = this.head.next;
    }

    let current = this.head;
    let previous;

    while(current) {
      if (current.data === data) {
        previous.next = current.next;
        current = null;
        this.length--;
      } else{
        previous = current;
        current = current.next;
      }
    }
  }

  toArray() {
    let ind = 0;
    let arr = [];
    let current = this.head;

    while(current) {
      arr[ind] = current.data;
      current = current.next;
      ind++;
    }

    return arr;
  }

  include(data) {
    let current = this.head;

    while(current) {
      if(current.data === data) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  index(data) {
    let ind = 0;
    let current = this.head;

    while(current) {
      if(current.data === data) {
        return ind;
      } else {
        current = current.next;
        ind++;
      }
    }
    return null;
  }

  insert(index, data) {
    let current = this.head;
    let count = 0;

    let newNode = new Node(data);

    while(count <= index) {
      count++;

      if(count === index) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++
      }

      current = current.next
    }
  }

  insertAfter(find, data) {
    let current = this.head;
    let newNode = new Node(data);

    if(!current.next) {
      return null;
    }

    while(current.data !== find) {
      current = current.next
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++
  }

  distance(first, second) {
    let count;
    let current = this.head;

    while (current) {
      if(current.data === first) {
        count = 0;
      }
      count++;
      current = current.next;

      if(current.data === second) {
        return count;
      }
    }
  }
}
