// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function () {
    // Add entrance animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to experience items
    const experienceItems = document.querySelectorAll('.experience-item, .education-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.background = 'linear-gradient(135deg, #f1f2f6, #ddd)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.background = '#f8f9fa';
        });
    });
});