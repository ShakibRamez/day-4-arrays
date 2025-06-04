let supersMan = ['super man',  'batman', 'spiderman', 'aquaman'];
//foreach method
// supersMan.forEach(
//     function(value, index, array){
//         console.log(array);
//     }
// );

//mapmethod

// let number = [1, 2 ,3];
// function double(x){
//     return x * 2;
// }

// let doubleN = number.map(double);
// console.log(doubleN);

//filter Method

// let numbers = [1, 2, 3, 4, 5, 6, 29, 30, 50, 60, 70, 90, 100];
// let evenNumbers = numbers.filter(
//     function(value, index, array){
//         return value % 2 === 0;
//     }
// );
// console.log(evenNumbers);

//reduce value

// let numbers = [1, 2, 3, 4, 5, 6, 29, 30, 50, 60, 70, 90, 100];

// function add(total, value, index, array){
//     return total + value;
// }

// let sum = numbers.reduce(add);
// console.log(sum);

//some method

// let numbers = [1, 2, 3, 9];
// let higherThanTen = numbers.some(
//     function(value){
//         return value > 10;
//     }
// );
// console.log(higherThanTen);

//every Method
// let numbers = [1, 2, 3, 9];
// let allHigherThanTen = numbers.every(
//     function (value){
//         return value > 0;
//     }
// );
// console.log(allHigherThanTen);

//find method
// let findSuper = supersMan.find(
//     function (value){
//         return value === 'spider man';
//     }
// );
// console.log(findSuper);

//findindex method
// let findSuper = supersMan.findIndex(
//     function (value){
//         return value === 'batman';
//     }
// );
// console.log(findSuper);