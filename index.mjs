import LinkedListI from "./LinkedList-iterative.mjs";
import LinkedListR from "./LinkedList-recursive.mjs";

// Example using iterative LinkedList
const myListI = new LinkedListI();
myListI.append("A value");
myListI.append("Appended value");
myListI.append("Another appended value");
myListI.prepend("Prepended value");

console.log(
  "-------------------------------- Using iterative LinkedList --------------------------------"
);
console.log("Initial list:");
console.log(myListI.toString());
console.log("Size = " + myListI.size);
console.log("Head Node:");
console.log(myListI.head);
console.log("Tail Node:");
console.log(myListI.tail);
console.log("Third Node:");
console.log(myListI.at(2));
console.log("Popping tail Node...");
myListI.pop();
console.log("Updated list:");
console.log(myListI.toString());
console.log("New Tail Node:");
console.log(myListI.tail);
console.log("List contains: 'Appended value'?");
console.log(myListI.contains("Appended value"));
console.log("Index of: 'Appended value'? (head = 0)");
console.log(myListI.find("Appended value"));
console.log("Inserting 'Inserted value' at index 2");
myListI.insertAt("Inserted value", 2);
console.log("Updated list:");
console.log(myListI.toString());
console.log("Removing Node at index 2");
myListI.removeAt(2);
console.log("Updated list:");
console.log(myListI.toString());

// Example using recursive LinkedList
const myListR = new LinkedListR();
myListR.append("Appended value");
myListR.append("Another appended value");
myListR.prepend("Prepended value");

console.log(
  "\n-------------------------------- Using recursive LinkedList --------------------------------"
);
console.log("Initial list:");
console.log(myListR.toString());
console.log("Size = " + myListR.size());
console.log("Head Node:");
console.log(myListR.head);
console.log("Tail Node:");
console.log(myListR.tail());
console.log("Third Node:");
console.log(myListR.at(2));
console.log("Popping tail Node...");
myListR.pop();
console.log("Updated list:");
console.log(myListR.toString());
console.log("New Tail Node:");
console.log(myListR.tail());
console.log("List contains: 'Appended value'?");
console.log(myListR.contains("Appended value"));
console.log("Index of: 'Appended value'? (head = 0)");
console.log(myListR.find("Appended value"));
console.log("Inserting 'Inserted value' at index 2");
myListR.insertAt("Inserted value", 2);
console.log("Updated list:");
console.log(myListR.toString());
console.log("Removing Node at index 2");
myListR.removeAt(2);
console.log("Updated list:");
console.log(myListR.toString());
