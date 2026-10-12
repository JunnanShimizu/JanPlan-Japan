document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('show'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('show');
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    elements.forEach((element) => observer.observe(element));
});
