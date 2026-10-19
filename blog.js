document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');
    const slideIndexes = [];

    const toISODate = (id) => {
        const [month, day, year] = id.split('-').map(Number);
        const fullYear = year > 90 ? 1900 + year : 2000 + year;
        return `${fullYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    container.insertAdjacentHTML('beforeend', blogEntries.map((entry, index) => `
        <section id="${entry.id}" class="full-page journal-entry">
            <div class="split-container">
                <article class="split-left journal-copy">
                    <time datetime="${toISODate(entry.id)}">${entry.date}</time>
                    <ul>
                        ${entry.items.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                </article>
                <div class="slideshow-container split-right journal-gallery ${entry.images.length ? '' : 'empty-slideshow'}" id="ss-${entry.id}">
                    ${entry.images.map((image) => `
                        <div class="mySlides fade">
                            <img src="${image.src}" alt="${image.alt}" loading="lazy">
                        </div>
                    `).join('')}
                    ${entry.images.length > 1 ? `
                        <button type="button" class="prev" data-slide-change="-1" data-slideshow="${index}" aria-label="Previous image">&#10094;</button>
                        <button type="button" class="next" data-slide-change="1" data-slideshow="${index}" aria-label="Next image">&#10095;</button>
                    ` : ''}
                </div>
            </div>
        </section>
    `).join(''));

    const slideshows = [...document.querySelectorAll('.slideshow-container')];
    slideshows.forEach((slideshow, index) => {
        slideIndexes[index] = 0;
        showSlide(index, 0);
    });

    function showSlide(slideshowIndex, change) {
        const slideshow = slideshows[slideshowIndex];
        if (!slideshow) return;

        const slides = slideshow.querySelectorAll('.mySlides');
        if (!slides.length) return;

        slideIndexes[slideshowIndex] = (slideIndexes[slideshowIndex] + change + slides.length) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndexes[slideshowIndex] ? 'block' : 'none';
        });
    }

    document.addEventListener('click', (event) => {
        const control = event.target.closest('[data-slide-change]');
        if (!control) return;
        showSlide(Number(control.dataset.slideshow), Number(control.dataset.slideChange));
    });

    document.addEventListener('keydown', (event) => {
        if (!event.target.closest('.slideshow-container')) return;
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        const slideshow = event.target.closest('.slideshow-container');
        const slideshowIndex = slideshows.indexOf(slideshow);
        showSlide(slideshowIndex, event.key === 'ArrowRight' ? 1 : -1);
    });

    const switchLanguage = (language) => {
        localStorage.setItem('language', language);
        document.querySelectorAll('[data-en]').forEach((element) => {
            element.textContent = element.getAttribute(`data-${language}`);
        });
    };

    document.getElementById('english')?.addEventListener('click', (event) => {
        event.preventDefault();
        switchLanguage('en');
    });

    document.getElementById('japanese')?.addEventListener('click', (event) => {
        event.preventDefault();
        switchLanguage('jp');
    });

    switchLanguage(localStorage.getItem('language') || 'en');
});
