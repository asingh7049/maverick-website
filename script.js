document.addEventListener('DOMContentLoaded', () => {
    // Scroll header background effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(93, 23, 23, 0.98)';
            header.style.padding = '1rem 5%';
        } else {
            header.style.background = 'rgba(26, 26, 26, 0.9)';
            header.style.padding = '1.5rem 5%';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Ticker content duplication for seamless looping
    const tickerContent = document.getElementById('ticker-content');
    if (tickerContent) {
        const items = tickerContent.innerHTML;
        tickerContent.innerHTML += items + items; // Repeat to ensure no gaps
    }

    // Micro-animation for news cards on hover
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
});
