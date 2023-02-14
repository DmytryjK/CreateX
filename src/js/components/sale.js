const sale = () => {
    const mainSale = document.querySelectorAll('.sale__card-large');
    const toCartBlock = document.querySelectorAll('.card-bottom__tocart');

    mainSale.forEach((slide, index) => {
        slide.addEventListener('mouseenter', event => {    
            const target = event.target;
            target.classList.add('card-large_active');
            toCartBlock[index].classList.add('tocart__active');
        })

        slide.addEventListener('mouseleave', () => {
            mainSale.forEach(slide => slide.classList.remove('card-large_active'));
            toCartBlock.forEach(toCart => toCart.classList.remove('tocart__active'));
        })
    })
}

export default sale;