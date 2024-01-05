
var Btn=document.querySelector("#swap")
Btn.addEventListener("click",()=>{
    var x = Math.floor(Math.random() * 6)+1;

    var ele=document.querySelector("#dice")
    document.getElementById("label").innerHTML=x
    switch(x){
        case 1:ele.setAttribute("src","Dice/d1.png") 
            break;
        case 2:ele.setAttribute("src","Dice/d2.png")
            break;
        case 3:ele.setAttribute("src","Dice/d3.png")
            break;
        case 4:ele.setAttribute("src","Dice/d4.png")
            break;
        case 5:ele.setAttribute("src","Dice/d5.png")
            break;
        case 6:ele.setAttribute("src","Dice/d6.png")
            break;
    }
    
})