//  let promise=new Promise(
//     (resolve,reject)=>{
        
//         let a=10;
//         if(a<=50){
//             resolve("the value is resolved 10");
//         }else
//         reject("the value is rejected 10")
//     }
//  );
// promise.then((message)=>{
//     console.log(message);   

// })
// .catch((err) => {
//     console.log(err);

// })

// let promise=new Promise(
//     (resolve,reject)=>{
//         let data=5;
//         if (data){
//             resolve("the data is resolved");
//         }
//         else{
//             reject("the data is empty")
//         }
//     }
// )

//     promise.then(
//         (message)=>{
// console.log(message)
//         }
//     )
//         .catch(
//             (error)=>{
//                 console.log(error)
//             }
//         )

    

// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//     resolve("hello, friends")
// },1000);

// })
// }
// async function getData(){
//     const data = await fetchData();
//     console.log(data);
// }getData();



// function fetchData() {
//     // return new Promise((resolve)=>{
//          setTimeout(()=>{
//             console.log ("data fetched")
//         } , 1000)
//     // })

// }
// function getData(){
//      fetchData();
//  
// }
// getData();



// function addData(){
// return ("Data added");

// }
// async function addData1(){
//     const data = await addData();
//     console.log(data);
// }
// addData1();


