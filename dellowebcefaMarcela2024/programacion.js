function deportes(){
    var nombre = document.getElementById("nombre").value;
    var contraseña = document.getElementById("contraseña").value;
    
    if (contraseña == 1234) 
        {
        // document.getElementById("ingreso").innerHTML="Puede ingresar";
        window.location.assign ("menu.html");
        }
        else {
            document.getElementById("ingreso").innerHTML="Verifique sus datos y vuelva a intentar"
        }
        
      }

