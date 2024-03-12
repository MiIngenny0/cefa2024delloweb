
function b(){ 
 var objetos=document.getElementById("objeto").value
var objetos2=document.getElementById("objeto 2").value
var objetos3=document.getElementById("objeto 3").value
var objetos4=document.getElementById("objeto 4").value

    if (objetos=="balon" && objetos2==  "piernas" && objetos3=="manos" && objetos4== "uniforme"){
        window.location.assign("desc1.html")
    }
    else
    {
        alert ("no marce");
    }



}