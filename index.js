// DOM NAVIGATION

// const element=document.getElementbyId("fruits");
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

// const ulElements=document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.backgroundColor="yellow"
// });

// const element=document.getElementById("fruits");
// const lastChild=element.lastElementChild;
// lastChild.style.backgroundColor="yellow";

// const ulElements=document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.backgroundColor="yellow"
// })


// const element=document.getElementById("apple");
// const nextSibling=element.nextElementSibling;
// nextSibling.style.backgroundColor="yellow";

// const element=document.getElementById("orange");
// const prevSibling=element.previousElementSibling;
// prevSibling.style.backgroundColor="yellow";

// const element=document.getElementById("apple");
// const parent=element.parentElement;
// parent.style.backgroundColor="blue"

// const element=document.getElementById("fruits");
// const children=element.children;

// Array.from(children).forEach(child =>{
//     child.style.backgroundColor="red";
// })

// ADD & CHANGE HTML

// STEP 1 CREATE THE ELEMENT

// const newH1=document.createElement("h1");


// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent="I like pizza";
// newH1.id="myH1";
// newH1.style.color="tomato"
// newH1.style.textAlign="center";


// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2=document.getElementById("box2");
// document.body.insertBefore(newH1,box2);

// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[0]);

// REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1);

// EVENT LISTENER

// const myBox=document.getElementById("myBox");
// const myButton=document.getElementById("myButton");

// myBox.addEventListener("click",function(event){
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent=" Ouch!";
// })

// myBox.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent=" Ouch!";
// })

// myBox.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent="Click me!";
// })

// myButton.addEventListener("click",function(event){
//     myBox.style.backgroundColor="tomato";
//     myBox.textContent=" Ouch!";
// })

// myButton.addEventListener("mouseover",event=>{
//     myBox.style.backgroundColor="yellow";
//     myBox.textContent=" Ouch!";
// })

// myButton.addEventListener("mouseout",event=>{
//     myBox.style.backgroundColor="lightgreen";
//     myBox.textContent="Click me!";
// })

// function changeColor(event){
//     // console.log(event);
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent=" Ouch!";
// }

// myBox.addEventListener("click",changeColor);


// KEY EVENTS

// document.addEventListener("keydown",event=>{
//     console.log(`Key down =${event.key}`)
// })

// document.addEventListener("keyup",event=>{
//     console.log(`Key up =${event.key}`)
// })


// HIDE/SHOW HTML

// const myButton=document.getElementById("myButton");
// const myImg=document.getElementById("myImg");

// myButton.addEventListener("click",event=>{

//     if(myImg.style.visibility==="hidden"){
//         myImg.style.visibility="visible";
//         myButton.textContent="Hide";
//     }
    
//     else{
//     myImg.style.visibility="hidden";
//     myButton.textContent="Show";
//     }

// })

// NODE LIST

// let buttons=document.querySelectorAll(".myButton");

// console.log(buttons)

// ADD HTML/CSS PROPERTIES

// buttons.forEach(button=>{
//     button.style.backgroundColor="green";
//     button.textContent+="😁"
// });

// CLICK EVENT LISTENER

// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//        event.target.style.backgroundColor="tomato";
//     })
// })

// MOUSEOVER + MOUSEOUT EVENT LISTENER

// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor="hsl(205,100%,40%)"
//     }
//     )
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor="hsl(205,100%,60%)"
//     }
//     )
// })

// ADD AN ELEMENT

// const newButton=document.createElement("button");//STEP 1
// newButton.textContent="Button 5"; //STEP 2
// newButton.classList="myButton";
// document.body.appendChild(newButton);//STEP 3

// buttons=document.querySelectorAll(".myButton");

// REMOVE AN ELEMENT

// buttons.forEach(button =>{
//     button.addEventListener("click",event=>{
//         event.target.remove();
//         buttons=document.querySelectorAll(".myButton")
//     });
// });


// CLASSLIST

const myH1=document.getElementById("myH1");
const myButton=document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.classList.add("hover");

// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover");
// })

// myH1.classList.add("enabled")
// myButton.classList.add("enabled");
// myButton.addEventListener("click",event=>{

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled");
//     }

// });






