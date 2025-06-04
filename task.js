let fruits = ["apple", "banana", "orange"];
console.log("initial list:", fruits);

fruits.push("mango"); // در اخر لست اضافه میکه
fruits.unshift("strawberry"); // در اول لست اضافه میکنه
console.log("after adding items:", fruits);

fruits.pop(); // پاک میکنه از آخر
fruits.shift(); // پاک میکنه از اول
console.log("after removing items:", fruits);
