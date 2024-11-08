
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Ensure 'home-text' is preceded by a dot if it's a class, or by a '#' if it's an ID
sr.reveal('.enclose', { delay: 200, origin: 'top' });
sr.reveal('.img', { delay: 300, origin: 'top' });
sr.reveal('.img-src', { delay: 300, origin: 'top' });

sr.reveal('.About-us, .services, .agency, .client, .contact-us', { delay: 200, origin: 'top' });

