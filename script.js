function trocarCOR() {
    document.body.style.backgroundColor = "blue";
}


// EmailJS
emailjs.init({
    publicKey: "83ufY7jqfyy-Gr2zL"
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        " contact_service",
        "template_1zuvs7p",
        formulario
    )
    .then(function() {

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    })
   .catch(function(error) {

    console.error("ERRO COMPLETO DO EMAILJS:", error);

    alert("Erro: " + error.text);

});
});