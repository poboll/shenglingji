// Create quantum dots animation for background
document.addEventListener('DOMContentLoaded', () => {
    // --- Quantum Dots Animation ---
    const dotsContainer = document.querySelector('.quantum-dots');
    if (dotsContainer) {
        for (let i = 0; i < 80; i++) {
            createQuantumDot(dotsContainer);
        }
    }

    // --- Feature Card Hover Effect ---
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // --- Screenshot Carousel ---
    initCarousel();

    // --- Scroll-based Fade-in Animation ---
    initScrollAnimations();
});

// Function to create a single quantum dot
function createQuantumDot(container) {
    const dot = document.createElement('div');
    dot.classList.add('quantum-dot');
    
    const size = Math.random() * 3 + 1;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    
    dot.style.animationDuration = `${Math.random() * 15 + 10}s`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    dot.style.setProperty('--x-end', `${(Math.random() - 0.5) * 400}px`);

    container.appendChild(dot);
}

// Function to initialize the screenshot carousel
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsNav = document.querySelector('.carousel-dots');

    if (slides.length === 0) return;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            moveToSlide(track, currentSlide, slides[i]);
            currentSlide = slides[i];
            updateDots(i);
        });
        dotsNav.appendChild(dot);
    });
    const dots = Array.from(dotsNav.children);

    let currentSlide = slides[0];
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    // slides.forEach(setSlidePosition); // Using flexbox, so this isn't needed

    const moveToSlide = (track, currentSlide, targetSlide) => {
        const targetIndex = slides.findIndex(slide => slide === targetSlide);
        track.style.transform = 'translateX(-' + (targetIndex * 100) + '%)';
        currentSlide.classList.remove('is-selected');
        targetSlide.classList.add('is-selected');
    };
    
    const updateDots = (targetIndex) => {
        const currentDot = dotsNav.querySelector('.active');
        currentDot.classList.remove('active');
        dots[targetIndex].classList.add('active');
    };

    nextButton.addEventListener('click', () => {
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0; // Loop back to the start
        }
        moveToSlide(track, currentSlide, slides[nextIndex]);
        currentSlide = slides[nextIndex];
        updateDots(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1; // Loop back to the end
        }
        moveToSlide(track, currentSlide, slides[prevIndex]);
        currentSlide = slides[prevIndex];
        updateDots(prevIndex);
    });
    
    // Auto-play
    setInterval(() => {
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        moveToSlide(track, currentSlide, slides[nextIndex]);
        currentSlide = slides[nextIndex];
        updateDots(nextIndex);
    }, 5000);
}

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
} 