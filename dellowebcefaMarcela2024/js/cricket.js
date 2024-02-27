function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["Rojo", "11", "Hacer carreras"];
    let score = 0;

    const bola = document.getElementById("bola").value;
    const jugadores = document.getElementById("jugadores").value;
    const objetivo = document.getElementById("objetivo").value;

    const answers = [bola, jugadores, objetivo];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "cricket.html";
    } else {
        alert("Vuelve a empezar");
    }
}