function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["20", "2000", "Montaña"];
    let score = 0;

    const viento = document.getElementById("viento").value;
    const altura = document.getElementById("altura").value;
    const ubicacion = document.getElementById("ubicacion").value;

    const answers = [viento, altura, ubicacion];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "parapente.html";
    } else {
        alert("Vuelve a empezar");
    }
}