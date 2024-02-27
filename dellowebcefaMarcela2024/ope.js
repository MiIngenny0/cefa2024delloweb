function operacion(a, b){
var operar = document.getElementById("operador").value;

if (operar == "suma"){
    num1=parseInt(a)
    num2=parseInt(b)
    suma=num1+num2;
    document.getElementById("resulsuma").innerHTML=suma
}
}