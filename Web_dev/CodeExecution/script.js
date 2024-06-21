// console.log(a);
// var a = 5;

// var a = 10;
// function fxn(){
//     console.log(a);
//     // var a = 20;
//     function gxn(){
//         console.log(a);
//     }
//     gxn();
// }
// fxn();

// function fxn(){
//     let a= 10;
//     function gxn(){
//         console.log(a);
//     }
//     gxn();
// }
// let innerfxn = fxn();
// console.log(innerfxn);

// let mypromise = new Promise(function(resolve,reject){
//     let a = 5;
//     let b = 5;
//     if(a==b){
//         resolve("Success");
//     }else{
//         reject("No not equal");
//     }
// })
// // console.log(mypromise)

// mypromise.then(function(data){
//     console.log("AEEE Aee")
// })
// mypromise.catch(function(error){
//     console.log("Nope");
// })
// mypromise.finally(function(){
//     console.log("Chal age badh");
// })

// let fs = require('fs');
// let fpromise = fs.promises.readFile('f.txt');
// console.log(fpromise);

function logA(){ console.log('A')}
function logB(){ console.log('B')}
function logC(){ console.log('C')}
function logD(){ console.log('D')}
function logE(){ console.log('E')}
logA();
setTimeout(logB,0);
Promise.resolve().then(logC);
Promise.resolve().then(logE);
logD();
