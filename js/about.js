document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".toggle-theme");

    // Ensure button exists
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Save theme preference in localStorage
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        });

        // Load dark mode preference
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
        }
    }

    // Smooth Scroll for Menu Links
    document.querySelectorAll('.menu li a').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Function to trigger the wave fade-in effect
    function revealElements() {
        const fadeElements = document.querySelectorAll(".fade-in");

        // Reset all elements to be invisible again
        fadeElements.forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
        });

        // Start the wave effect
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 150); // 150ms delay for a smooth wave effect
        });
    }

    // Ensure animations trigger when landing on the About Page
    function checkAndAnimateAboutPage() {
        if (window.location.pathname.includes("about.html")) {
            revealElements();
        }
    }

    // Run animation when About page is loaded or navigated to
    checkAndAnimateAboutPage();
    window.addEventListener("popstate", checkAndAnimateAboutPage);
    window.addEventListener("hashchange", checkAndAnimateAboutPage);
});
