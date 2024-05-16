import Node from "./Node.mjs";

export default class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }

  // Add a new node containing value to the end of the list
  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value, null);
      return;
    }
    let pointer = this.headNode;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }

    pointer.nextNode = new Node(value, null);
  }
  // Add a new node containing value to the start of the list
  prepend(value) {
    this.headNode = new Node(value, this.head);
  }
  // Return the total number of nodes in the list
  get size() {
    if (this.headNode === null) {
      return 0;
    }
    let pointer = this.headNode;
    let size = 1;
    while (pointer.nextNode !== null) {
      size += 1;
      pointer = pointer.nextNode;
    }
    return size;
  }
  // Return the first node in the list
  get head() {
    return this.headNode;
  }
  // Return the last node in the list
  get tail() {
    if (this.headNode === null) {
      return null;
    }
    let pointer = this.headNode;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  // Return the node at the given index (head = 0)
  at(index) {
    if (index < 0 || !Number.isInteger(index)) {
      return null;
    }
    let pointer = this.headNode;
    for (let i = 0; i < index; i++) {
      if (pointer.nextNode === null) {
        return null;
      }
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  // Remove the last element from the list
  pop() {
    if (this.headNode === null) {
      return;
    }
    let pointer = this.headNode;
    let previousNode;
    while (pointer.nextNode !== null) {
      previousNode = pointer;
      pointer = pointer.nextNode;
    }
    pointer.value = null;
    previousNode.nextNode = null;
  }
  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let pointer = this.headNode;
    while (pointer !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  }
  // Return the index of the node containing value, or null if not found (head = 0)
  find(value) {
    let pointer = this.headNode;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) return index;
      index += 1;
      pointer = pointer.nextNode;
    }
    return null;
  }

  // Represent LinkedList object as a string to visualize the structure
  toString() {
    let string = "";
    let pointer = this.headNode;
    while (pointer != null) {
      string += "( " + pointer.value + " ) -> ";
      pointer = pointer.nextNode;
    }
    string += "null";
    return string;
  }
}
