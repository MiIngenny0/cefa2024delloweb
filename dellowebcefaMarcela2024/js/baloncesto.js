function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["Naranja", "5", "Marcar puntos"];
    let score = 0;

    const balon = document.getElementById("balon").value;
    const jugadores = document.getElementById("jugadores").value;
    const objetivo = document.getElementById("objetivo").value;

    const answers = [balon, jugadores, objetivo];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "baloncesto.html";
    } else {
        alert("Vuelve a empezar");
    }
}