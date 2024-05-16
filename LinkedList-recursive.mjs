import Node from "./Node.mjs";

export default class LinkedList {
  constructor(headNode = new Node("A value")) {
    this.headNode = headNode;
  }

  // Add a new node containing value to the end of the list
  append(value, node = this.headNode) {
    if (node.nextNode === null) {
      node.nextNode = new Node(value, null);
      return;
    } else {
      this.append(value, node.nextNode);
    }
  }
  // Add a new node containing value to the start of the list
  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }
  // Return the total number of nodes in the list
  size(node = this.headNode, count = 0) {
    if (node === null) {
      return count;
    }
    count += 1;
    return this.size(node.nextNode, count);
  }
  // Return the first node in the list
  get head() {
    return this.headNode;
  }
  // Return the last node in the list
  tail(node = this.headNode) {
    if (node.nextNode === null) {
      return node;
    }
    return this.tail(node.nextNode);
  }
  // Return the node at the given index (head = 0)
  at(index, node = this.headNode, counter = 0) {
    if (index < 0 || !Number.isInteger(index)) {
      return null;
    }
    if (counter === index) {
      return node;
    }
    counter += 1;
    return this.at(index, node.nextNode, counter);
  }
  // Remove the last element from the list
  pop(previousNode = this.headNode, node = this.headNode.nextNode) {
    if (node.nextNode === null) {
      previousNode.nextNode = null;
      return;
    }
    return this.pop(node, node.nextNode);
  }
  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value, node = this.headNode) {
    if (node === null) return false;
    if (node.value === value) return true;
    return this.contains(value, node.nextNode);
  }
  // Return the index of the node containing value, or null if not found (head = 0)
  find(value, node = this.headNode, counter = 0) {
    if (node === null) return null;
    if (node.value === value) return counter;
    counter += 1;
    return this.find(value, node.nextNode, counter);
  }

  // Represent LinkedList object as a string to visualize the structure
  toString(node = this.headNode, string = "") {
    if (node === null) {
      string += "null";
      return string;
    }
    string += "( " + node.value + " ) -> ";
    return this.toString(node.nextNode, string);
  }
  // Insert a new node with the provided value at the given index
  insertAt(
    value,
    index,
    node = this.headNode,
    previousNode = null,
    counter = 0
  ) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (counter === index) {
      node = new Node(value, node);
      previousNode.nextNode = node;
      return;
    }
    counter += 1;
    return this.insertAt(value, index, node.nextNode, node, counter);
  }
  // Remove the node at the given index
  removeAt(index, node = this.headNode, previousNode = null, counter = 0) {
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }
    if (counter === index) {
      previousNode.nextNode = node.nextNode;
      return;
    }
    counter += 1;
    return this.removeAt(index, node.nextNode, node, counter);
  }
}
