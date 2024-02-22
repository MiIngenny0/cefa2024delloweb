function formuagua(){
var impuno= document.getElementById("implementouno").value;
document.getElementById("impuno").innerHTML=impuno;
var impdos= document.getElementById("implementodos").value;
document.getElementById("impdos").innerHTML=impdos;
var imptres= document.getElementById("implementotres").value;
document.getElementById("imptres").innerHTML=imptres;


if (impuno=="surf"   && impdos=="traje" && imptres=="gorro"){
    document.getElementById("resultadoimp").innerHTML="puede ingresar"
    window.location.href = "agua.html"
}
else{
    document.getElementById("resultadoimp").innerHTML="No puede ingresar"
}
}