document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    if (menu && hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            console.log('Click détecté sur le menu hamburger.'); // Vérification du clic

            menu.classList.toggle('active');
            console.log('Classe "active" ajoutée au menu.'); // Vérification de l'ajout de classe
        });

        window.addEventListener('resize', () => {
            const windowWidth = window.innerWidth;

            if (windowWidth > 768) {
                menu.classList.remove('active');
            }
        });
    } else {
        console.error('Les éléments du menu n\'ont pas été trouvés.');
    }
});