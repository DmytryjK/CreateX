function customInput (inputSelector, buttonUpSelector, buttonDownSelector) {
    const input = document.querySelector(inputSelector),
          btnUp = document.querySelector(buttonUpSelector),
          btnDown = document.querySelector(buttonDownSelector);

    btnUp.addEventListener('click', () => {
        input.stepUp();
    })

    btnDown.addEventListener('click', () => {
        input.stepDown();
    })
    
}

export default customInput;