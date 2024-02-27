function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario.trim() === "leidyluna" && contrasena.trim() === "Deportes2024")  {
        alert("Inicio de sesión exitoso");
        window.location.href = "menu.html";  
    }
    else {
        alert("Usuario o contraseña incorrectos");
        return false; 
    }
}