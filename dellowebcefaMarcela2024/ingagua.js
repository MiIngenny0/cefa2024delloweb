function ingresoag(){
    var objeto1 = document.getElementById("obj1").value
    var objeto2 = document.getElementById("obj2").value
    var objeto3 = document.getElementById("obj3").value
    if(objeto1=="gorro" && objeto2 == "vestido de baño" && objeto3 == "gafas"){
        window.location.assign("infoagua.html")
    }
    else{
        window.alert("No puedes ingresar, revise sus datos");
    }
    
}