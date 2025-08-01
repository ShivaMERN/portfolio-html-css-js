 eringdocument.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const mouseMovement = document.querySelector(".cursor");
    const navbarLinks = document.querySelectorAll(".nav-links li");

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
            
            navList.classList.remove('active');
        });
    });

    // Smooth scrolling for cta button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Cursor animation
    window.addEventListener("mousemove", function(e) {
        console.log("Mouse move event:", e.pageX, e.pageY);
        mouseMovement.style.top = e.pageY + "px";
        mouseMovement.style.left = e.pageX + "px";
    });

    navbarLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseMovement.classList.add("link-animate");
            link.classList.add("link-hovering");
        });
        link.addEventListener("mouseleave", () => {
            mouseMovement.classList.remove("link-animate");
            link.classList.remove("link-hovering");
        });
    });
});
