// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
    
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    // Alternar visibilidade do menu no celular
    menuBtn.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Fechar o menu ao clicar em qualquer link (melhora a experiência)
    const links = document.querySelectorAll("#nav-menu a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
