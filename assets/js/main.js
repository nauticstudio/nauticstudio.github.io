document.addEventListener("DOMContentLoaded", () => {
    // ANIMACIONES AL HACER SCROLL
    const animateElements = document.querySelectorAll(".nautic-animate");

    const checkVisibility = () => {
        animateElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                const delay = element.getAttribute("data-animate-delay") || 0;
                setTimeout(() => {
                    element.classList.add("animate");
                }, delay);
            }
        });
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility(); // Verificar al cargar la página

    // CARGA DE BOOTSTRAP (CDN CON FALLBACK)
    function loadBootstrap() {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
        script.integrity = "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz";
        script.crossOrigin = "anonymous";
        script.onerror = () => {
            // Si el CDN falla, carga la versión local
            const fallbackScript = document.createElement("script");
            fallbackScript.src = "./assets/js/bootstrap.bundle.min.js";
            document.body.appendChild(fallbackScript);
        };
        document.body.appendChild(script);
    }

    loadBootstrap();

    // AUTO-CERRADO DEL MENÚ NAVBAR EN MÓVIL
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".nav-link");

    if (navbarToggler && navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide(); // Cierra el menú al hacer clic en un link
            });
        });
    }
});
