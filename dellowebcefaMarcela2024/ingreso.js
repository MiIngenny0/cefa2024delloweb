function formu(){
var usuario= document.getElementById("codigousuario").value;
document.getElementById("usuario").innerHTML=usuario;
var contraseña= document.getElementById("contraseñausuario").value;
document.getElementById("contraseña").innerHTML=contraseña;

if(contraseña==1234){
    document.getElementById("contra").innerHTML="contraseña correcta"
    /* window.location.href = "menu.html" */
    window.location.assign("menu.html")
}

else{
    document.getElementById("contra").innerHTML="No puede ingresar"
}
}