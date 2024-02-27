function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["Azul", "1", "Crol"];
    let score = 0;

    const piscina = document.getElementById("piscina").value;
    const nadadores = document.getElementById("nadadores").value;
    const estilo = document.getElementById("estilo").value;

    const answers = [piscina, nadadores, estilo];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "natacion.html";
    } else {
        alert("Vuelve a empezar");
    }
}