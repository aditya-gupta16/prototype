document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollTop >= sectionTop - sectionHeight / 3) {
            section.classList.add("visible");
        }
    });
});