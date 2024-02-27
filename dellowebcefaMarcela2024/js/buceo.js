function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["Azul", "10", "Exploración de arrecifes"];
    let score = 0;

    const agua = document.getElementById("agua").value;
    const profundidad = document.getElementById("profundidad").value;
    const actividad = document.getElementById("actividad").value;

    const answers = [agua, profundidad, actividad];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "buceo.html";
    } else {
        alert("Vuelve a empezar");
    }
}