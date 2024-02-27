function ingresoba(){
    var objeto1 = document.getElementById("obj1").value
    var objeto2 = document.getElementById("obj2").value
    var objeto3 = document.getElementById("obj3").value
    if(objeto1=="uniforme" && objeto2 == "balon" && objeto3 == "zapatos"){
        window.location.assign("infobalon.html")
    }
    else{
        window.alert("No puedes ingresar, revise sus datos");
    }
    
}