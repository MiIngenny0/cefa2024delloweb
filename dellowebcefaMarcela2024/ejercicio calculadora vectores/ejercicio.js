function operacion(a, b){
    console.log("ingreso a la funcion de operaciones")
    var operador = document.getElementById("operador").value;
    console.log("el operador es;", operador)
 switch (operador)

    {
        case "suma":
    
        num1= parseInt(a);
        num2= parseInt(b)
        suma=num1+num2;
        document.getElementById("resultSuma").innerHTML=suma
        break;
    
    case "resta":
        num1= parseInt(a);
        num2= parseInt(b)
        resta=num1-num2;
        document.getElementById("resultResta").innerHTML=resta
        break;
    
   case "multiplicacion":
        num1= parseInt(a);
        num2= parseInt(b)
        multiplicacion=num1*num2;
        document.getElementById("resultMult").innerHTML=multiplicacion
        break;
    
   case "division":
        num1= parseInt(a);
        num2= parseInt(b)
        division=num1/num2;
        document.getElementById("resultDiv").innerHTML=division
        break;
    }
   
     }
