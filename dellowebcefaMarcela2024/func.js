function contra(){
    var clavei = document.getElementById("clave").value;
    if (clavei == "Deportes2024"){
      document.getElementById("resultado").innerHTML=("Puedes ingresar")
      window.location.assign ("menu.html")

    }
    else {
        document.getElementById("resultado").innerHTML=("NO Puedes ingresar, intentalo nuevamente")
    }
    
    
}
function aire(){
  var clavei = document.getElementById("objeto1").value;
  var clavei = document.getElementById("objeto2").value;
  var clavei = document.getElementById("objeto3").value;
  if (clavei == "casco","rodilleras","coderos"){
    document.getElementById("resultado").innerHTML=("¡hola puedes ingresar!")
    window.location.assign ("aire.html")

  }
  else {
      document.getElementById("resultado").innerHTML=("¡ Hola no Puedes ingresar, intentalo nuevamente")
  }
  
  
}
function natacion(){
  var clavei = document.getElementById("objeto1").value;
  var clavei = document.getElementById("objeto2").value;
  var clavei = document.getElementById("objeto3").value;
  if (clavei == "vestido de baño","gorro","gafas"){
    document.getElementById("resultado").innerHTML=("¡hola puedes ingresar!")
    window.location.assign ("natacion.html")

  }
  else {
      document.getElementById("resultado").innerHTML=("¡ Hola no Puedes ingresar, intentalo nuevamente")
  }
  
  
}
function balon(){
  var clavei = document.getElementById("objeto1").value;
  var clavei = document.getElementById("objeto2").value;
  var clavei = document.getElementById("objeto3").value;
  if (clavei == "balon","uniforme","zapatos"){
    document.getElementById("resultado").innerHTML=("¡hola puedes ingresar!")
    window.location.assign ("balon.html")

  }
  else {
      document.getElementById("resultado").innerHTML=("¡ Hola no Puedes ingresar, intentalo nuevamente!")
  }
  
  
}
