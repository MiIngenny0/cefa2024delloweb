function ingresar(){
    var claveingreso = document.getElementById("pasword").value;
    console.log("clave", claveingreso)
    if (claveingreso == "Deportes2024" ){
        window.location.assign("index_2.html")
    }else{
        window.alert("olvidó su contraseña")
    }
}

