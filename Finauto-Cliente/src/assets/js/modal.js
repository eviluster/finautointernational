// Función para verificar si el usuario está registrado
function checkRegistration(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

    // Aquí vamos a simular la verificación del usuario
    // Puedes reemplazar esta lógica con una verificación real, por ejemplo, revisando una cookie o token de sesión.
    var isRegistered = true; // Cambia esto para simular el registro (true o false)
    var modal = document.getElementById("modal");
    var modal2 = document.getElementById("modal-promo");

    if (isRegistered) {
        // Si el usuario está registrado, lo redirigimos a la página protegida
        showModal(modal2);
        // window.location.href = "pagina-protegida.html";
    } else {
        // Si no está registrado, mostramos el modal
        showModal(modal);
    }
}

// Función para mostrar el modal
function showModal(modal) {
    // var modal = this.modal;
    modal.style.display = "flex"; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar el modal
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    var modal2=document.getElementById("modal-promo")
    if (event.target == modal ) {
        modal.style.display = "none";
    }
    else if (event.target == modal2 ){
        modal2.style.display="none";
    }
       

}