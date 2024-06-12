// const Numbers=[10,20,30,40,50]
// let foundNumbers = Numbers.find ((num)=>num>30)
// console.log(foundNumbers)

// const Numbers=[10,20,30,40,50];
// const filteredNumbers = numbers.filter(num => num > 30);
// console.log(filteredNumbers);

// const arr=[1,2,3]
// const newArr=[4,5,6,arr[0],arr[1],[2]]
// console.log(newArr)


// const arr = [1,2,3,4,5];
// const [a,b,...rest]
// console.log(a)
// console.log(b)
// console.log(c)
// const first = arr[0];
// const rest = arr.slice(2);
// console.log("First element:", first);
// console.log("rest of the elements:", rest);


// function filterNumbers(numbers) {
//     return numbers.filter(number => number >= 10);
// }

// const numbers = [5, 12, 8, 20, 3, 15];
// const filtered = filterNumbers(numbers);
// console.log(filtered);


// function add (...numbers){
//     return numbers.reduce((sum,num) => sum + num,0) 
    
// };
// console.log(add(1,2,3,4,5));

function sub(...numbers){
    return numbers.reduce((sub,num) => sub-num)
};
console.log(sub(1,2,3,4,5,6));