// for(let i=0; i<=10; i+=2){
//     console.log(i);
// }
// let i;
// for(i=0; i<=5; i++){
//     console.log("d")
// }
// let j;
// for(j=1;j<=100; j+=10 ){
//     console.log(j)
// }

// let d;
// for(d=12;d<=20; d++){
//     console.log(d)
// }

// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for(let d=2;d<=20;d++){
//     if(d%2==1){
//         console.log(d)
//     }
// }

// let e=1;
// while(e<=20){
//     console.log(e);
//     e++
// }

// let s=1;
// while(s>=-20){
//     if(s%2==0){
//         console.log(s);
//     }
//         s--;

//     }
    
//     let t=20;
//     for(let d=1;d<-20)

    
// let i = 5;
// for (let p = 1; p <= p; p++) {
//     let str = " * ";
//     console.log(str.repeat(p));
// }


// let a = 5;
// for (let b = 1; b>= a; b++){
//     let str = " * ";
//     let space = ' ';
//     console.log(space.repeat((a-b))+str.repeat(a));
// }

// let n = 6;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     let space  = '  ';
//     console.log(space.repeat((n-i))+str.repeat(i));
// }



// let rows = 5;

// let pattern = "";

// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);

// let pattern = 10;
// let rows = "";
// for (let n = 1; n <= pattern; n++) {
//     for (let num = 1; num <=n; num++) {
//         rows += num;
//     }
//     rows +="\n";
// }
//     console.log(rows);

// let i = 5;
// for (let p = 1; p <= i; p++) {
//     let str = " * ";
//     console.log(str.repeat(p));
// }

// let p = 100
// for (let q = 10; q<=p; q++){
//     let str = " * ";
//     console.log(str.repeat(q));
// }


// let count = 0;
// do{
//     console.log(count);
//     count++;
// }
// while( count < 5);


// let j =10;
// do{
//     console.log(j);
//     j--;
// }
// while(j>=-10);

// let n = 5;
// for(let i = 1; i<=n; i++){
//     let str="* ";
//     let space = ' ';
//     console.log(space.repeat(n=-1(i));
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     let space  = '  ';
//     console.log(space.repeat((n-i))+str.repeat(i));
// }

// let n = 5;
// for (let i = n; i >= 1; i--) {
//     let str = "* ";
//     let space  = '  ';
//     console.log(space.repeat(n-i)+str.repeat(i));
// }

// let n = 5;
// for(i =1; i<=n; i++){
//     let str = "";
//     for(let j = 1; j<=n; j++){
//        if(j <=n -1){
//         str +
//        }
//     }
// }

// function sub(num1, num2){
//     const sub=num1-num2;
//     return sub;

// }
// const result = sub(15,20)
// console.log(result);

// let greet=function(name){
//     return ("hello," + name)
    
// }
// const result = greet("ram")
// console.log(result);



// function myFunction(g1, g2) {
//     return g1 / g2;
// }
// const value = myFunction(8, 2); // Calling the function
// console.log(value);

// function add(num1,num2){
//     return num1+num2;
// }
// const value = add(7,9);
// console.log(value);

// const names=["ram","shyam"];
// for(let i =0)

    // const num=[1,2,3,4,5];
    // let mul=1;
    // for(leti=0;i<=num.length-1; 1++){
    //     mul=mul*num[i];
    // }
    // console.log(mul);

    // for (var i = 0; i <= 15; i++) {
    //     console.log("Value of i is: " + i);
    //  }

    //  Print the numbers from 12 to 24

    // for (var i = 12; i<24; i++){
    //     console.log("Value of i is:" +i);
    // }
    // Print the ODD numbers from 7 to 31

    // for (var i = 7; i <= 31; i++) {
    //     if (i % 2 != 0) {
    //       console.log(i);
    //     }
    //   }

    //   #4 — Print the EVEN numbers from 10 to -20
    
    // for(var i = 10; i>=-20; i--){
    //     if (i % 2 == 0){

    //         console.log(i);
    //     }
    // }
    //  Iterate through all numbers from 1 to 45. Print the following:

    // For multiples of 3 print “Fizz”
    // For multiples of 5 print “Buzz”
    // For multiples of 3 and 5 print “FizzBuzz”

    for (var i = 1; i <= 45; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          console.log("FizzBuzz");
        } else if (i % 3 == 0) {
          console.log("Fizz");
        } else if (i % 5 == 0) {
          console.log("Buzz");
        }
      }

