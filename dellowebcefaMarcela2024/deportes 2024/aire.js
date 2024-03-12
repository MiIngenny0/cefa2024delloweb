
function b(){ 
    var objetos=document.getElementById("objeto").value
   var objetos2=document.getElementById("objeto 2").value
   var objetos3=document.getElementById("objeto 3").value
   var objetos4=document.getElementById("objeto 4").value
   
       if (objetos=="globo aerostatico" && objetos2==  "paracaidas" && objetos3=="planeador" && objetos4== "parapente"){
           window.location.assign("desc2.html")
       }
       else
       {
           alert ("no marce");
       }
   
   
   
   }