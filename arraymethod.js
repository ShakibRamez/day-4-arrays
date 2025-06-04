let supersMan = ['super man',  'batman', 'spiderman', 'aquaman'];

// supersMan.length = 2;
// console.log(supersMan);
// supersMan.length = 3;
// console.log(supersMan);

//first method indexOf
// console.log(supersMan);
// console.log(supersMan.indexOf('greed lantern'));

//second method include
// console.log(supersMan.includes('batman'));


//third method
// console.log(supersMan.pop());
// console.log(supersMan);

//forth method

// console.log(supersMan.shift());
// console.log(supersMan);

//fifth method
// supersMan.push('super-man');
// supersMan.unshift('thor');

// let newSuper = supersMan.concat(['wolverine', 'cuclops', 'profesor x']);
// console.log(supersMan);
// console.log(newSuper);
// console.log(supersMan);

//sixth method

// let superNew = "superman, batman, flash";
// let superArray = superNew.split(',');
// console.log(superArray); 

//seventh method
// console.log(supersMan);
// let xman = supersMan.slice(2,4);

// console.log(xman);
// console.log(supersMan);

//splice method
// supersMan.splice(2, 1, 'green');
// console.log(supersMan);

//reverse method
// supersMan.reverse();
// console.log(supersMan);

//sort method
// supersMan.sort();
// console.log(supersMan);

//task

let fruits = ['apple', 'orange', 'banana'];
fruits.unshift('cherry', 'pineapple');
fruits.push('plum', 'grapes');
console.log(fruits);

fruits.splice(3, 1, 'lemon');
console.log(fruits);
fruits.sort();
console.log(fruits);
