function validarFormulario() {
    const formulario = document.getElementById("formulario");
    const correctAnswers = ["Grandes", "Shortboard", "Playa"];
    let score = 0;

    const olas = document.getElementById("olas").value;
    const tabla = document.getElementById("tabla").value;
    const ubicacion = document.getElementById("ubicacion").value;

    const answers = [olas, tabla, ubicacion];

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    if (score === correctAnswers.length) {
        window.location.href = "surfing.html";
    } else {
        alert("Vuelve a empezar");
    }
}