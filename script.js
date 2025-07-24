document.addEventListener('DOMContentLoaded', function() {
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