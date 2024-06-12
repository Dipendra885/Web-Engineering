// function outerFunction(){
//     let outerVariabe=10;
//     function innerFunction(){
//         console.log(outerVariable);
//     }
//     return innerFunction();
// }

// function createCounter() {
//     var count = 0;
//     function counter(){
//         count++;
//         return count;
//     }
//     return counter;
// }
// const increment= createCounter();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// function computer(name){
//     console.log('hello' + name + '!');
//     function greet(name,callback){
//         callback(name);
//     }
//     greet("ram",computer)
// }

// function add(num1,num2,callback){
//     console.log('num1,num2' + add + '!');
//     function sub(num1,num2) 

// }


// function multiply(a, b, callback) {
//     var result = a * b;
//     console.log("multiply Function Result:",result);
//     callback(result);
//   }


  function greet(name,caste){
    console.log("Hello" + name  + caste +"!" );
  }
  function lastName(lastName,callback){
    callback(lastName, "yadav");
  }
  lastName("Dipu", firstName,"greet");