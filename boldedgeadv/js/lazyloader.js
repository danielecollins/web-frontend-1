const sources = document.querySelectorAll("source");

function preloadImage(src) {
    const srcset = src.getAttribute("data-src");
    if(!srcset)
        return;
    src.srcset = srcset;
    console.log("load")
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
            return;
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

sources.forEach(source => {
    imgObserver.observe(source);
});