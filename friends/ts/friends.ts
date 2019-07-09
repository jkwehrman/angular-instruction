import {Friends} from "./friendList"; 
console.log("hi");

let pArray = new Array();
let p1: Friends = new Friends("Harry", 18, "harry@hogwarts.edu", false);
pArray.push(p1);
let p2: Friends = new Friends("Hermione", 16, "Hermione@hogwarts.edu", false);
pArray.push(p2);
let p3: Friends = new Friends("Ron", 14, "ron@hogwarts.edu", false);
pArray.push(p3);
let p4: Friends = new Friends("Albus", 45, "albus@hogwarts.edu", true);
pArray.push(p4);
let p5: Friends = new Friends("Draco", 10, "draco@hogwarts.edu", false);
pArray.push(p5);

for (let i = 0; i < pArray.length; i++) {
let entry = pArray[i];
console.log(entry); 
}

