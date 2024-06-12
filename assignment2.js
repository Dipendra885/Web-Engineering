// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = [
//                 { id: 1, name: "Dipu", age: 25 },
//                 { id: 2, name: "rupesh", age: 26 },
//                 { id: 3, name: "nitesh", age: 37 }
//             ];
//             resolve(users);
//         }, 2000);
//     });
// }

// fetchData().then(users => {
//     console.log(users);
// });


// function createCounter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }
// const counter = createCounter();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());


// function processData(numbers, callback) {
//     const processedNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         processedNumbers.push(callback(numbers[i]));
//     }

//     return processedNumbers;
// }

// const numbers = [1, 2, 3, 4, 5];

// function square(num) {
//     return num * num;
// }
// const squaredNumbers = processData(numbers, square);
// console.log(squaredNumbers);


// async function fetchData() {
//     const users = [
//         { id: 1, name: "Ram", age: 35 },
//         { id: 2, name: "Sita", age: 25 },
//         { id: 3, name: "Gita", age: 24 }
//     ];

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(users);
//         }, 2000);
//     });
// }

// (async () => {
//     const users = await fetchData();
//     console.log(users);
// })();



// function doubleNumbers(numbers) {
//     return numbers.map(number => number * 2);
// }

// const numbers = [1, 2, 3, 4, 5];
// const doubled = doubleNumbers(numbers);
// console.log(doubled);


// const Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const filteredNumbers = Numbers.filter ((num)=> num>10);
// console.log(filteredNumbers)

// const Numbers=[5,10,15,20,25,30]
// let foundNumbers = Numbers.find ((num)=>num>15)
// console.log(foundNumbers)


// function sumNumbers(numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }
// const numbers = [1, 2, 3, 4, 5];
// const sum = sumNumbers(numbers);
// console.log(sum);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `{this.name} is {this.age} years old.`;
    }
}
const person = new Person("Dipu", 24);
console.log(person.describe());
