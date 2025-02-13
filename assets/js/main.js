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

  // Intenta cargar Bootstrap desde el CDN
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
