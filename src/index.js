import './less/index.less'

// Your code goes here!

const navLink = document.querySelectorAll (".nav-link") ; 
console.log(navLink) ; 

navLink.forEach ( anchor => anchor.addEventListener( 'mouseover' , (event) => {
    console.log (`
    event type: ${event.type}
    event target; ${event.target.nodeName}
    `) ; 
}) ) ; 

navLink.forEach ( anchor => anchor.addEventListener( 'click' , (event) => {
    console.log (`
    event type: ${event.type}
    event target; ${event.target.nodeName}
    `) ; 
}) ) ; 

navLink.forEach (anchor => anchor.addEventListener ("focus", (event)=>{
    console.log (`I AM ${event.type}`) ;
}))
const navContainer = document.querySelector(".container ") ; 
console.log(navContainer) ;

navContainer.addEventListener ( 'mouseenter' , (event) => {
    console.log (`
    event type: ${event.type}
    event target; ${event.target.nodeName}
    `) ; 
}) ; 

navContainer.addEventListener ( 'mouseleave' , (event) => {
    console.log (`
    event type: ${event.type}
    event target; ${event.target.nodeName}
    `) ; 
}) ;

window.addEventListener('load', (event) => {
    console.log('PAGE LOADED');
  });

function enterKey (event) {
    if (event.key==="Enter") {
        console.log(`${event.key} PRESS`)
    }
} ;
 
document.addEventListener("keydown", enterKey ) ; 

function mouseWheel (event) {
    if (event.type==="wheel") {
        console.log(` MOUSE ${event.type}`)
    }
} ; 

document.addEventListener("wheel", mouseWheel) ; 


const contentPick = document.querySelector ('.content-pick') ; 
console.log(contentPick) ; 

contentPick.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = "LightCoral" ; 
}) ; 

const destination = document.querySelectorAll ('.destination') ; 
console.log(destination) ;

destination.forEach (destination => destination.addEventListener('mouseenter', (event)=>{
    event.target.style.backgroundColor = "LightPink" ; 
})) ; 

// destination.forEach(destination => destination.addEventListener("focus", (event)=>{
//     console.log(`I AM ${event.type}`)
// })) ; 

// focus.addEventListener("focus", (event)=>{
//     console.log(`I AM ${event.type}`)
// }) ; 


