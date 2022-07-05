document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var name = document.getElementById('name').value;
    if(name.length == 0) {
        alert('No has escrito nada en el nombre');
        return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('No has escrito nada en el email');
        return;
    }
    var description = document.getElementById('description').value;
    if (description.length == 0) {
        alert('No has escrito nada en la descripción');
        return;
    }
    alert(`Has enviado correctamente el mensaje de contacto: ${name}`)
    this.submit();
}