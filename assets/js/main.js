    document.addEventListener("DOMContentLoaded", () => {
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
    });