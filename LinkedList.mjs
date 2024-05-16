import Node from "./Node.mjs";

export default class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }

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

  prepend(value) {
    this.headNode = new Node(value, this.head);
  }

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

  get head() {
    return this.headNode;
  }

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
}
