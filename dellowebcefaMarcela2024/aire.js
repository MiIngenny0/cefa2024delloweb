function formuaire(){
    var impuno= document.getElementById("implementouno").value;
    document.getElementById("impuno").innerHTML=impuno;
    var impdos= document.getElementById("implementodos").value;
    document.getElementById("impdos").innerHTML=impdos;
    var imptres= document.getElementById("implementotres").value;
    document.getElementById("imptres").innerHTML=imptres;
    
    
    if (impuno=="seguridad"   && impdos=="paracaidas" && imptres=="altura"){
        document.getElementById("resultadoimp").innerHTML="puede ingresar"
        window.location.href = "aire.html"
    }
    else{
        document.getElementById("resultadoimp").innerHTML="No puede ingresar"
    }
    }