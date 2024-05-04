// let promise=new Promise((resolve, reject) => {
//     console.log("jokes")
// })
// console.log("hellow")
// setTimeout(function(){
//     console.log("hellow who are you")
// },2000)
// console.log("khan is bst")
// // setInterval(function(){
// //     alert("hellow")
// // },3000)
// console.time("a")
// console.log("great")
// console.timeEnd("a")
// let promise1=new Promise((resolve, reject) => {
//     console.log("i want to learn")
//     reject(new Error("i am a error"))
// })
// console.log(promise)
// promise.catch((Error)=>{
//     console.log("some error occure")
// })
// promise.then((value)=>{
//     console.log(value)
// })
// let p1= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("khan is best person")
//         resolve(56)
//     },5000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2=new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("fare is welfare")
//         })
//     },5000)
//     return p2
// }).then((value)=>{
//     console.log("we are done now")
// })
// let p1 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // alert("you need to resolve window error it is in window profile")
//         resolve(1)
//     }, 5000)
// })
// p1.then(()=>{
//     console.log("congratulation you solved error of window from setting of computer")
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
// resolve(4)
//         }, 6000)
//     })
//     .then((value)=>{console.log(value)})
// })
// p1.then(()=>{
// console.log("khan is the one of precious gift of god")
// })
// let p1 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(new Error("error"));
//     },3000)
// })
// let p2 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 8")
//     },4000)
// })
// let p3 =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 9")
//     },5000)
// })
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })
// // let promise_all=promise.all([p1,p2,p3])
// // promise_all.then((value)=>{
// //     console.log(value)
// // })
// document.getElementById("khan").style.color="red"
// document.getElementById("khan").style.backgroundColor="red"
// async function harry(){
//     let pi =new Promise((resolve, reject) => {
//         setTimeout((){
//             resolve("27 degree of weather")
//         }, 3000)
//     })
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout((){
//             resolve("degree of weather")
//         },5000)
//     })
//     // p1.then(alert)
//     // p2.then(alert)
//     p1=await p2
//     p2=await p1
//     return(p1,p2)
// }
// console.log("welcome")
// let a =harry()
// console.log(a)
// setInterval(() => {
//     promt("khan")
// }, 3000);
// setTimeout(()=>{
//     console.log("learn to live")
// }, 2000)
// setTimeout(()=>{
// console.log("iam great person")
// },4000)
// setTimeout(()=>{
//     console.log("khan is great than all")
// },6000)
// setTimeout(()=>{
//     console.log("good")
// },7000)
// try{
//   let a = 0
// console.log(program)
// console.log("it has been successfully")
// }catch(error){
//     ("This is a error")
// }
// finally{
//     console.log("learn to live")
// }
// const loadscript= async(scr)=>{
//   return new Promise((resolve, reject) => {
//     let script= document.createElement("script")
//     script.scr=scr
//     script.onload=()=>{
//       resolve(scr)
//     }
//     document.head.append(script)
//   })
// }
// const main2= async()=>{
//   let a = await loadscript("https://getbootstrap.com/docs/5.3/getting-started/introduction/")
//   console.log(a)
// }
// main2()
// let date = new Date();  
// let options = {  
//     weekday: "long", year: "numeric", month: "short",  
//     day: "numeric", hour: "2-digit", minute: "2-digit"  
// };  

// console.log(date.toLocaleTimeString("en-us", options)); 
// let p = fetch("https://jsonplaceholder.typicode.com/users")
// p.then((value1)=>{
//     return value1.json()
// }).then((value2)=>{
// console.log(value2)
// })
// const createtodo =async()=>{
// let options={
//     method:"post",
//     Headers: {
//         "Content-type" : "application/json"
//     },
//     body:JSON.stringify({
//         id: 1,
//         title: 'harry',
//         body: 'khan',
//         userId: 1,
//       }), 
        
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     let response = await p.json()
//     return response
// }
// const mainfunc=async()=>{
// let Todo =await createtodo()
// console.log(Todo)
// }
// mainfunc()
console.log(document.cookie)
document.cookie="name = abdul samad nizamani1122334400"
document.cookie="name = khan3344499"
console.log(document.cookie)
