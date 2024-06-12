// function greet(){
//     const firstName = "John"
//     const secondName = "joe"
//     console.log(`Hello ${firstName} ${secondName}`);
// }

// greet();
// greet();

// function number(Add){
//     const Num1= "5"
//     const Num2="8"
//     console.log(num1+num2)

// }



// function subtract(num1, num2){
//     const subtract=num1-num2;
//     return subtract;
// }
// const result = sub

// es6 vs jv diference

// let add = (a,b)=>{
//     return a+b
// }
// let result= add(4,5)
// console.log(result)

// function myFunction(a, b) { 
//     return a + b; 
// } 
  
// const result = myFunction(5, 2); 
// console.log(result);

// function add( a,b ){
// return a + b;
// }
// const result = add(54, 67);
// console.log(result);

// function User(name, age, mobile) {
//     this.name = name;
//     this.age = age;
//     this.mobile = mobile;
//   }
//   var user1 = new User('Talha', 26, 8801967402131);
//   console.log(user1)
//   user1 = {
//     age: 26,
//     mobile: 1993,
//     name: "Talha"
//   }

  const user = {
    name: "Talha",
    age: 26,
    marks: {
      math: 20,
      eng:30
    }
  };
  console.log(user["marks"]["math"]) //20
  console.log(user.marks.math) //20


  