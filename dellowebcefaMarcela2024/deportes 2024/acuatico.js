
function b(){ 
    var objetos=document.getElementById("objeto").value
   var objetos2=document.getElementById("objeto 2").value
   var objetos3=document.getElementById("objeto 3").value
   var objetos4=document.getElementById("objeto 4").value
   
       if (objetos=="agua" && objetos2==  "vestuario" && objetos3=="salvavidas" && objetos4== "aletas"){
           window.location.assign("desc3.html")
       }
       else
       {
           alert ("no marce");
       }
   
   
   
   }