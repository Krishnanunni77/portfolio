// JavaScript for Scroll Fade-in Animation
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const screenPosition = window.innerHeight / 1.3;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < screenPosition) {
            element.classList.add('appear');
        }
    });
});

// Optional: Smooth Scroll for anchor links (like Connect with Me)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
