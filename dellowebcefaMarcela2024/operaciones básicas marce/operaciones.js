function operacion(a, b){
    console.log("ingreso a la funcion de operaciones")
    var operador = document.getElementById("operador").value;
    console.log("el operador es;", operador)

    if (operador == "suma"){
        num1= parseInt(a);
        num2= parseInt(b)
        suma=num1+num2;
        document.getElementById("resultSuma").innerHTML=suma
    }
    else (operador == "resta");{
        num1= parseInt(a);
        num2= parseInt(b)
        resta=num1-num2;
        document.getElementById("resultResta").innerHTML=resta
    }
    if (operador == "multiplicacion");{
        num1= parseInt(a);
        num2= parseInt(b)
        multiplicacion=num1*num2;
        document.getElementById("resultMult").innerHTML=multiplicacion
    }
    if (operador == "division");{
        num1= parseInt(a);
        num2= parseInt(b)
        division=num1/num2;
        document.getElementById("resultDiv").innerHTML=division
    }
   

}