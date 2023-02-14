function hideFilters() {
    const targetBtn = document.querySelector('.filters-btn'),
          aside = document.querySelector('.content .filter');

        targetBtn.addEventListener('click', () => {
            aside.classList.toggle('active');
        })
}

export default hideFilters;