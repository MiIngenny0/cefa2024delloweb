function ingreso(){
    var contr = document.getElementById("contra").value
    if(contr=="deportes2024"){
        window.location.assign("menu.html")
    }else{
        window.alert("No puedes ingresar, revisa tu contraseña");
    }
}