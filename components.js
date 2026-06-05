// components.js - Plantilla global para BAVU

function renderHeader(navClass = 'static-nav') {
    const headerHTML = `
        <nav class="${navClass}">
<div class="logo">
    <a href="index.html">
        <img src="img/BAVU_dark.png" alt="Logo BAVU">
    </a>
</div>
            <div class="hamburger-menu" id="hamburgerMenu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>

        <div class="menu-overlay" id="menuOverlay"></div>

        <div class="side-menu" id="sideMenu">
            <span class="close-menu" id="closeMenu">&times;</span>
            <div class="side-menu-content">
                <a href="products.html?cat=mujer">ELLAS</a>
                <a href="products.html?cat=hombre">ELLOS</a>
                <a href="products.html?cat=todo">TODO</a>
                <a href="como-comprar.html">CÓMO COMPRAR</a>
                <a href="conocenos.html">CONÓCENOS</a>
                <a href="redes.html">REDES</a>
            </div>
        </div>
    `;
    document.getElementById('header-container').innerHTML = headerHTML;

    // Lógica del menú lateral
    const hamburger = document.getElementById('hamburgerMenu');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');

    function openMenu() {
        sideMenu.classList.add('active');
        menuOverlay.classList.add('active');
    }

    function closeMenuAction() {
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
    }

    hamburger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuAction);
    menuOverlay.addEventListener('click', closeMenuAction);
}

function renderFooter() {
    const footerHTML = `
        <footer>
            <div class="social-links">
                <a href="https://www.instagram.com/bavu.clothing" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@bavu.clothing" target="_blank"><i class="fab fa-tiktok"></i></a>
                <a href="https://x.com/bavu.clothing" target="_blank"><i class="fab fa-x-twitter"></i></a>
                <a href="https://www.facebook.com/clothing.bavu" target="_blank"><i class="fab fa-facebook"></i></a>
            </div>
            <p>© 2026 BAVU CLOTHING</p>
            <p class="location">Diseñado en Santander, España</p>
        </footer>
        <a href="https://wa.me/34600000000" class="whatsapp-float" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.getElementById('footer-container').innerHTML = footerHTML;
}