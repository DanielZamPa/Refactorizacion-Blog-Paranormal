const form = document.getElementById("form-contacto");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alerta.classList.remove("d-none");
    form.reset();
});