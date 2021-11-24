const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button=document.getElementById("btn");
const color=document.querySelector(".color");
function randomColor(){return Math.floor(Math.random() * 4)}

button.addEventListener("click",function(){
    newColor=randomColor()
    document.body.style.backgroundColor=colors[newColor]
    color.innerHTML=colors[newColor]
})

