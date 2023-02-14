function easyAccordion (targetSelector, activeClass, elementForActiveClass) {
    const target = document.querySelector(targetSelector),
          parent = document.querySelector(elementForActiveClass);

    target.addEventListener('click', () => {
        parent.classList.toggle(activeClass);
    })

}

export default easyAccordion;