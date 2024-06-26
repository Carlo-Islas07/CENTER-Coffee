// Obtener elementos del DOM
var audioLink = document.getElementById('audioLink');
var modal = document.getElementById('audioModal');
var closeBtn = document.getElementsByClassName('close')[0];

// Cuando se hace clic en el enlace de audio
audioLink.onclick = function() {
    modal.style.display = "block";
}

// Cuando se hace clic en el botón de cerrar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, también se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
