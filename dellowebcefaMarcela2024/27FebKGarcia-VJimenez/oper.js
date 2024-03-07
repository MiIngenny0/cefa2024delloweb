function operacion(a,b){


    var operador = document.getElementById("operador").value;
    switch(operador){
    case ("suma"):
        num1=parseInt(a)
        num2=parseInt(b)
        suma=num1+num2;
        document.getElementById("resultSuma").innerHTML=suma
        break;
    
        case ("resta"):
            num1=parseInt(a);
            num2=parseInt(b)
            resta=num1-num2;
            document.getElementById("resultResta").innerHTML=resta
            break;
        case ("multiplicacion"):
                num1=parseInt(a);
                num2=parseInt(b)
                multi=num1*num2;
                document.getElementById("resultMulti").innerHTML=multi
                break;
        case ("division"):
                num1=parseInt(a);
                num2=parseInt(b)
                division=num1/num2;
                document.getElementById("resultDivi").innerHTML=division
                break;      
        
        
    
    }}
    
    