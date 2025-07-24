document.addEventListener('DOMContentLoaded', function() {
    // Manejar el clic del botón de rituales
    const btnRituales = document.getElementById('btn-rituales-evaluacion');
    if (btnRituales) {
        btnRituales.addEventListener('click', function() {
            window.location.href = 'rituales_vinculos.html';
        });
    }

    // Lógica para el menú de hamburguesa (si existe)
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav .menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    }
});
