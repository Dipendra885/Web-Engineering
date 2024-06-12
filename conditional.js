 
// // const a=5;
// // if(a<10){
// //     console.log
// // }

// // const day=7


// // let weight =50
// // let height=1.5
// // let bmi= weight/(height*height)
// // if (bmi>=30){
// //     console.log("obese")
// // }
// // else if (bmi>=25){
// //     console.log("overweight")
// // }
// // else if (bmi>=18.5){
// //     console.log("normal")
// // }
// // else{
// //     console.log("underweight")

// // }

// // let f =7
// // if(f>0){
// // console.log("nuber is positive")

// }
// else{
//     console.log("nuber is negative ")
// }

//     let g = 12
//     let h = 15
//     if (g>h){
//         console.log("g is greater than h")
//     }
// else {
//     console.log("H is greater than g")
// }
    
// let month=14
// if( month===1){
//     console.log("1 is january")

// }
// else if(month===2){
//     console.log("february")
// }
// else if(month===3){
//     console.log("March")
// }
//  else if(month===4){
//     console.log("April")
//  }


//  else if(month===12){
//     console.log("december")
//  }

//  else{
//     console.log("not a valid month")
//  }




// //  Make a program that prints day based on the input number from 1 to 7

// let week=7
// if("day===1"){
//     console.log("sunday")

// }
// else if("day===2"){
//     console.log("monday")
// }
// else if("day===3"){
//     console.log("tuesday")
// }
// else if ("day===4"){
//     console.log("wednesday")
// }
// else if ("day===5"){
//     console.log("thrusday")
// }
// else if ("day===6"){
//     console.log("friday")
// }
// else if (day===7){
//     console.log("saturday")
// }
// else{
//     console.log("invalid input")
// }

// const product = {
//     title:"ballpen",
//     rating:4,
//     offer:5,
//     price:270,
// };
// console.log(product);




// var num1 = 10;
// // var num2 = 15;
// // if (num1> num2){
// //     console.log("num1 is greater");
// // }
// // else{
// //     console.log("num2 is greater" );
// // }

// var score = 80;
// var grade;

// if(score>=90){
//     grade = "A";
// }
// else if (score >=76){
//     grade = "B";
// }
// else if (score>=60){
//     grade = "C";
// }
// else if (score>=40){
//     grade = "D";
// }
// else{
//     grade = "F";
// }
// console.log("Grade" +  grade);

// var age = 20;
// var ticketprice;
// if("age < 15"){
//     ticketPrice = 10;
// }
// else if (age >=12 && age < 16){
//     ticketPrice = 15;

// }
// else if(age>=18 && age < 60){
//     ticketPrice = 30;
// }
// else{
//     ticketPrice =20;
// }
// console.log("Ticket price: " + ticketPrice);

// var purchaseAmount=150;
// var  discountAmount;
// if("purchase amount >= 100"){
//     discount = "20";
// }
// else if("purchaseAmount >=50"){
//     discount = "10";
// }
// else if ("purchaseAmount >=40"){
// // //     discount = "0"
// // // }
// // // // console.log("Discount" + discount + "%"); 

// // // let a = 5
// // // console.log(typeof a);



// // // const "num1" = parseInt(prompt('Enter the first number '));
// // // const num2 = parseInt(prompt('Enter the second number '));

// // // const sum = num1 + num2;

// // // console.log(`The sum of ${num1} and ${num2} is ${sum}`);



// // // const num1 = 5;
// // // const num2 = 3;

// // // // add two numbers
// // // const sum = num1 + num2;

// // // // display the sum
// // // console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);



// // let a = prompt('Enter the first variable: ');
// // let b = prompt('Enter the second variable: ');


// // let temp;

// // temp = a;
// // a = b;
// // b = temp;

// // console.log(`The value of a after swapping: ${a}`);
// // console.log(`The value of b after swapping: ${b}`);


// let j = parseInt('Enter the first variable: ');
// let k = parseInt('Enter the second variable: ');

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);


    //    first = "Java ";
    //   console.log("First String: " + first);
  
     
    //    second = "Programming";
    //   console.log("Second String: " + second);
  
    
    //    joinedString = first.concat(second);
    //   console.log("Joined String: " + joinedString);
  




    //   const cp=1000;
    //   const sp=2000;
    //   if(sp>cp){
    //     let profit=sp-cp;
    //     profit=profit
    //   }

      let cp=1000
      let sp=2000
      switch(true){
        case (sp>cp):
           let profit = sp -cp;
            profit = (profit/cp) * 100
            console.log("profit" + profit +("%"))

            break;
        case (sp<cp):
            loss = cp -sp;
            loss = (loss/sp) * 100
            console.log("loss" + loss +("%"))
            break;

        default:
          console.log("bottle");
            break;

      }

      let person = {
        name: "John",
        age: 30,
        job: "developer"
      };
      
      for (let key in person) {
        console.log(key + ": " + person[key]);
      }


      let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}

function add(num1, num1){
  const sum=num1+num2;
  return sum;
}
const result = add(12, 15);
console.log(result);
      
      
      

