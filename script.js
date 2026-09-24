document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Menu Mobile Toggle (DOM)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu saat link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Dark/Light Mode Toggle (DOM)
    const themeToggle = document.getElementById('themeToggle');
    let isDark = false;

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        }
    });

    // 3. Dynamic Filter Proyek (DOM)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Form Handling & DOM Output
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        
        formStatus.style.color = '#10b981';
        formStatus.textContent = `Pesan dari ${name} berhasil dikirim!`;
        
        contactForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
        }, 4000);
    });
});