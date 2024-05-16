import LinkedList from "./LinkedList.mjs";

const myList = new LinkedList();
myList.append("A value");
myList.append("Appended value");
myList.append("Another appended value");
myList.prepend("Prepended value");

console.log("Initial list:");
console.log(myList.toString());
console.log("size = " + myList.size);
console.log("Head Node:");
console.log(myList.head);
console.log("Tail Node:");
console.log(myList.tail);
console.log("Third Node:");
console.log(myList.at(2));
console.log("Popping tail Node...");
myList.pop();
console.log("Updated list:");
console.log(myList.toString());
console.log("New Tail Node:");
console.log(myList.tail);
console.log("list contains: 'Appended value'?");
console.log(myList.contains("Appended value"));
console.log("Index of: 'Appended value'? (head = 0)");
console.log(myList.find("Appended value"));
