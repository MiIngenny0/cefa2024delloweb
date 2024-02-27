function ingresoai(){
    var objeto1 = document.getElementById("obj1").value
    var objeto2 = document.getElementById("obj2").value
    var objeto3 = document.getElementById("obj3").value
    if(objeto1=="traje" && objeto2 == "paracaidas" && objeto3 == "gafas"){
        window.location.assign("infoaire.html")
    }
    else{
        window.alert("No puedes ingresar, revise sus datos");
    }
    
}