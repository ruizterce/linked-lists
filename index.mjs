import LinkedList from "./LinkedList.mjs";

const myList = new LinkedList();
myList.append("A value");
myList.append("Appended value");
myList.append("Another appended value");
myList.prepend("Prepended value");

console.log(myList);
console.log(myList.size);
console.log("Head Node:");
console.log(myList.head);
console.log("Tail Node:");
console.log(myList.tail);
console.log("Third Node:");
console.log(myList.at(2));
myList.pop();
console.log("New Tail Node:");
console.log(myList.tail);
console.log(myList);

console.log("ok");
