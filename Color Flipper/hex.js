const hex = [ "A", "B", "C", "D", "E", "F"];


const button=document.getElementById("btn");
const color=document.querySelector(".color");
function randomNo(max) {
    return Math.floor(Math.random() * max)}

button.addEventListener("click",function(){
    newColor="#"+hex[randomNo(6)]+randomNo(10)+hex[randomNo(6)]+randomNo(10)+hex[randomNo(6)]+randomNo(10)
    document.body.style.backgroundColor=newColor
    color.innerHTML=newColor

})