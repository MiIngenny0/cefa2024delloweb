function ingreso(){
    var claveingreso = document.getElementById("password").value;
    if (claveingreso == "12345"){
        alert("Puede ingresar")
        window.location.assign("menu.html")
    }
    else {
        alert("Intente otra vez")
    }
} 
