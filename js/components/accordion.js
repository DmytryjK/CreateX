function filtersAccordion () {
    
    const filterItemsParrent = document.querySelector('.filter__list'),
          closeFilter = document.querySelectorAll('.filter__decorate-element');

    filterItemsParrent.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.filter__header')) {
            
            const parent = target.parentNode;
            
            if (parent.nextElementSibling.classList.contains('active')) {
                parent.nextElementSibling.classList.remove('active');

                closeFilter.forEach((close, index) => {
                    if (parent.getAttribute('data-number') == index + 1) {
                        close.classList.remove('active');
                    }
                })
            } else {
                parent.nextElementSibling.classList.add('active');

                closeFilter.forEach((close, index) => {
                    if (parent.getAttribute('data-number') == index + 1) {
                        close.classList.add('active');
                    }
                })
            }
        }
    })
}

export default filtersAccordion;