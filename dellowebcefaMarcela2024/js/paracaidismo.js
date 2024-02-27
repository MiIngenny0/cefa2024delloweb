function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["4000", "250", "Montaña"];
    let score = 0;

    const altura = document.getElementById("altura").value;
    const velocidad = document.getElementById("velocidad").value;
    const ubicacion = document.getElementById("ubicacion").value;

    const answers = [altura, velocidad, ubicacion];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "paracaidismo.html";
    } else {
        alert("Vuelve a empezar");
    }
}