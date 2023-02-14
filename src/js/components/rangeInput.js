function rangeInput () {

    const inputsContainer = document.querySelector('.values-inputs'),
          inputStart = document.querySelector('.value-start'),
          inputEnd = document.querySelector('.value-end'), 
          body = document.querySelector('body');

    var priceRange = new rSlider({
        target: '#priceSliderInput',
        values: {min: 10, max: 1000},
        step: 1,
        range: true,
        scale: false,
        labels: false,
        set: [300, 900]
    }); 

    const sliderPointers = document.querySelectorAll('.rs-pointer');
    
    inputStart.value = priceRange.conf.set[0];
    inputEnd.value = priceRange.conf.set[1];
    
    body.addEventListener('mouseup', e=> {

        inputStart.value = sliderPointers[0].children[0].innerHTML;
        inputEnd.value = sliderPointers[1].children[0].innerHTML;

    })

    inputsContainer.addEventListener('input', e => {
        if (e.target.closest('input')) {
            e.target.value = e.target.value.replace(/\D/g,'');
        }
    })

    inputsContainer.addEventListener('change', e => {
        const target = e.target;
        const sliderMinValue = priceRange.conf.values[0];
        const sliderMaxValue = priceRange.conf.values[priceRange.conf.values.length - 1];

        if (e.target.value <  sliderMinValue) {
            e.target.value = sliderMinValue;
        } else if (e.target.value > sliderMaxValue) {
            e.target.value = sliderMaxValue;
        }

        if (target.closest('input')) {
            priceRange.setValues(+inputStart.value, +inputEnd.value);
        }
    })
}

export default rangeInput;