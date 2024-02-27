
function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const respuestasCorrectas = ["2000", "20", "Campo"];
    let puntaje = 0;

    const altitud = document.getElementById("altitud").value;
    const velocidad = document.getElementById("velocidad").value;
    const ubicacion = document.getElementById("ubicacion").value;

    const respuestas = [altitud, velocidad, ubicacion];

    respuestas.forEach((respuesta, index) => {
        if (respuesta === respuestasCorrectas[index]) {
            puntaje++;
        }
    });

    if (puntaje === respuestasCorrectas.length) {
        window.location.href = "volarenglobo.html";
    } else {
        alert("Por favor, vuelve a intentarlo.");
    }
}