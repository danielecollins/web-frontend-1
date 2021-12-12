const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0% 0% -20% 0%"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
            return;
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});