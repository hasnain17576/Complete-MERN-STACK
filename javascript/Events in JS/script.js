let modeBtn = document.querySelector("#mode");
let currentMode = "light";
modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
       currentMode="dark";
        document.body.style.backgroundColor = "black";
       document.body.style.color = "white";
       modeBtn.textContent = "Switch to Light Mode";
   } else {
       document.body.style.backgroundColor = "white";
       document.body.style.color = "black";
       currentMode = "light";
       modeBtn.textContent = "Switch to Dark Mode";
   }
    
});
console.log(currentMode); 

// let btn1 =  document.querySelector("#btn1");
// btn1.addEventListener("click", () => {
//     console.log("#btn1 was clicked-handler1");
    
// })
// btn1.addEventListener("click", () => {
//     console.log("#btn1 was clicked-handler2");
    
// })
// const handler3=()=>{
//     console.log("#btn1 was clicked-handler3");
// }
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("#btn1 was clicked-handler4");
    
// })
// btn1.removeEventListener("click", handler3);

// // btn1.onclick=()=>{
// //     console.log("#btn1 was clicked");
// //     let a=25;
// //     a++;
//     console.log(a);
// }

// let div= document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("mouse is over the div");
// }