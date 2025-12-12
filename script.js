document.addEventListener('DOMContentLoaded', () => {

    // 1. Confetti Animation on Load
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();

    // 2. Glitter Cursor Effect
    const cursorTrail = document.getElementById('cursor-trail');

    document.addEventListener('mousemove', (e) => {
        createSparkle(e.clientX, e.clientY);
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        cursorTrail.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // 3. Envelope Interaction
    const envelopes = document.querySelectorAll('.envelope');

    envelopes.forEach(envelope => {
        envelope.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    });

    // 4. Scroll Animations
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .glass-card, .quote-card')
        .forEach(el => observer.observe(el));

    // 5. Hero Balloon Randomization
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(b => {
        const duration = 6 + Math.random() * 4;
        b.style.animationDuration = `${duration}s`;
    });

});
