function calc(a,b){
    var operador= document.getElementById("operador").value;
    var TOperacion=["suma","resta","multiplicacion", "division"];
    var cuales= TOperacion.length;
    
    for (op=0; op <= cuales; op++){
        if(TOperacion[op]== operador){
            num1 = parseInt(a);
            num2 = parseInt(b)
            suma = num1 + num2;
            document.getElementById("resultSuma").innerHTML = suma
        }

        if(TOperacion[op]== operador){
            num1 = parseInt(a);
            num2 = parseInt(b)
            resta= num1 - num2;
            document.getElementById("resultResta").innerHTML = resta
        }

         if(TOperacion[op]== operador){
            num1 = parseInt(a);
            num2 = parseInt(b)
            multi= num1 * num2;
            document.getElementById("resultMulti").innerHTML = multi
        }

         if(TOperacion[op]== operador){
            num1 = parseInt(a);
            num2 = parseInt(b)
            division= num1 / num2;
            document.getElementById("resultDivi").innerHTML = division
        }
    }
}