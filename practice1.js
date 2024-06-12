// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "* ";

// console.log(str.repeat(i));
// }

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {

//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
 
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {

//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {

//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

let str = ' '
for (let i = 1;  i<=5; i++){
  for(let j=i; j<=i; j++){
    str += i
  }
  console.log(str)
}

