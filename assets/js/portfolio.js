const themeStorageKey = "portfolio-theme";

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(themeStorageKey, nextTheme);
});

const showcaseCarousel = document.querySelector(".showcase-carousel");

function moveShowcaseCarousel(direction) {
    if (!showcaseCarousel) {
        return;
    }

    const slides = [...showcaseCarousel.querySelectorAll(".showcase-slide")];
    const currentIndex = slides.findIndex((slide) =>
        Math.abs(slide.offsetLeft - showcaseCarousel.scrollLeft) < slide.offsetWidth / 2
    );
    const nextIndex = Math.max(0, Math.min(slides.length - 1, currentIndex + direction));
    showcaseCarousel.scrollTo({ left: slides[nextIndex].offsetLeft, behavior: "smooth" });
}

document.querySelectorAll("[data-carousel-direction]").forEach((button) => {
    button.addEventListener("click", () => {
        moveShowcaseCarousel(button.dataset.carouselDirection === "next" ? 1 : -1);
    });
});

showcaseCarousel?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        moveShowcaseCarousel(event.key === "ArrowRight" ? 1 : -1);
    }
});