document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.mobile-menu-btn');
    const navigation = document.querySelector('.nav-links');
    const close = () => {
        if (!button || !navigation) return;
        navigation.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
    };
    if (button && navigation) {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', 'primary-navigation');
        navigation.id = 'primary-navigation';
        button.addEventListener('click', () => {
            const open = navigation.classList.toggle('active');
            button.setAttribute('aria-expanded', String(open));
        });
        navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
        document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
    }
    const header = document.querySelector('header');
    if (header) {
        const update = () => { header.style.boxShadow = window.scrollY > 12 ? '0 1px 18px rgba(0,0,0,.06)' : 'none'; };
        update();
        window.addEventListener('scroll', update, { passive: true });
    }
});
