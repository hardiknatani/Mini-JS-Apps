var bill = document.getElementById("bill")
var five = document.querySelector("#five")
var ten = document.getElementById("ten")
var fifteen = document.getElementById("fifteen")
var twentyFive = document.getElementById("twentyFive")
var fifty = document.getElementById("fifty")
var custom= document.getElementById("custom")
var people = document.getElementById("people")
var tipPerPerson=document.getElementById("tipPerPerson")
var totalPerPerson = document.getElementById("totalPerPerson")
var reset = document.getElementById("reset")
var errorMessage = document.getElementById("errorMessage")
var tipPercent;
var curTip;


var tipArray=[five,ten,fifteen,twentyFive,fifty]

bill.addEventListener("focus",function(){
    bill.style.borderColor= "hsl(172, 67%, 45%)";
})


tipArray.map(tip=>{
    tip.addEventListener("click",function(){
        tip.style.backgroundColor="hsl(172, 67%, 45%)";
     
        tipPercent=parseInt(tip.innerHTML)
        console.log(tipPercent)
        var filteredArray = tipArray.filter(
            function(e){
                return e!==tip
            }
        )
        filteredArray.map(tip=>{
            tip.style.backgroundColor="hsl(183, 100%, 15%)";
        })
    })

})


custom.addEventListener("focus",function(){
    custom.style.backgroundColor= "hsl(0, 0%, 100%)";
    custom.placeholder="";
    custom.style.color="hsl(184, 14%, 56%)";
    tipArray.map(tip=>{
        tip.style.backgroundColor="hsl(183, 100%, 15%)";
        
    })
})

custom.addEventListener("blur",function(){
    if(!/^\d+$/.test(custom.value)){
        showError("Tip Amount")}
})


people.addEventListener("blur",function(){

    if (!/^\d+$/.test(bill.value) ){
        showError("Bill Amount");
    }
    else if(!/^\d+$/.test(people.value)){
        showError("No. Of People")
    }
    else{
    if (custom.value ){
        curTip=custom.value;
    console.log(curTip)
    }else{
    curTip=(bill.value*(tipPercent/100))
    console.log(curTip)}
    tipPerPerson.innerHTML= "$"+ parseFloat(curTip/people.value).toFixed(2)
    totalPerPerson.innerHTML = "$" + parseFloat(curTip/people.value + bill.value/people.value).toFixed(2);}
})

reset.addEventListener("click",function(){
    errorMessage.innerHTML="";
    tipPerPerson.innerHTML= "$0.00";
    totalPerPerson.innerHTML = "$0.00";
    bill.value=0;
    people.value=0;
    curTip=0;
    tipArray.map(tip=>{

            tip.style.backgroundColor=" hsl(183, 100%, 15%)";

    
    })

})


function showError(ele){
errorMessage.innerHTML="Invalid " + ele

}