/* ==========================================================
   PUREVIA - INTERACTIVE SCRIPT (script.js)
   Navigasi Tab/Halaman Tunggal, Menu Mobile, & Scroll Handler
   ================================================---------- */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link, .btn-nav-goto');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Fungsi Navigasi Tab / Section Switcher
    function switchSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Perbarui status aktif pada link navigasi utama
        navLinks.forEach(link => {
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            } else if (link.classList.contains('nav-link')) {
                link.classList.remove('active');
            }
        });

        // Tutup menu mobile jika sedang terbuka
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    }

    // Event Listener untuk Navigasi Klik
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (targetId) {
                e.preventDefault();
                switchSection(targetId);
            }
        });
    });

    // Toggle Hamburger Menu untuk Tampilan Mobile
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Tampilkan / Sembunyikan Tombol Scroll to Top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Aksi Tombol Scroll to Top
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});