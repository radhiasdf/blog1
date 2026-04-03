// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        // Add to clicked
        this.classList.add('active');

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Change header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-bar');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});