function fun() {
     var nombre = document.getElementById("nom").value;
     var contra = document.getElementById("con").value;

     if (nombre == "nose" && contra == "dep2024") {
          alert("Puede ingresar")
          location.assign("menu.html");
     }
     else {
          alert("Datos incorrectos. Inténtalo de nuevo");
     }
}

function agua() {
     var objeto1 = document.getElementById("ob1").value;
     var objeto2 = document.getElementById("ob2").value;
     var objeto3 = document.getElementById("ob3").value;

     if (objeto1 == "gorro" && objeto2 == "toalla" && objeto3 == "bañador") {
          alert("Puede ingresar")
          location.assign("nuevo.html");
     }
     else {
          alert("Datos incorrectos. Inténtalo de nuevo");
     }
}

function balon() {
     var objeto1 = document.getElementById("ob1").value;
     var objeto2 = document.getElementById("ob2").value;
     var objeto3 = document.getElementById("ob3").value;

     if (objeto1 == "balon" && objeto2 == "tenis" && objeto3 == "agua") {
          alert("Puede ingresar")
          location.assign("nuevo.html");
     }
     else {
          alert("Datos incorrectos. Inténtalo de nuevo");
     }
}

function aire() {
     var objeto1 = document.getElementById("ob1").value;
     var objeto2 = document.getElementById("ob2").value;
     var objeto3 = document.getElementById("ob3").value;

     if (objeto1 == "no" && objeto2 == "sabemos" && objeto3 == "jaja") {
          alert("Puede ingresar")
          location.assign("nuevo.html");
     }
     else {
          alert("Datos incorrectos. Inténtalo de nuevo");
     }
}