import { sliders } from './components/slider.js';
import sale from './components/sale.js';
import megamenu from './components/megamenu.js';
import rangeInput from './components/rangeInput.js';
import filtersAccordion from './components/accordion.js';
import hideFilters from './components/hideFilters.js';
import customInput from './components/customInput.js';
import easyAccordion from './components/easyAccordion.js';


window.addEventListener('DOMContentLoaded', () => {

    sliders();
    sale();
    megamenu();

    try {
        rangeInput();
        hideFilters();
        filtersAccordion();
    } catch{}

    try {
        easyAccordion('.delivery-title', 'active', '.info-delivery');
        easyAccordion('.return-title', 'active', '.info-return');
        customInput('.tocart-quantity', '.quantity-up', '.quantity-down');
    } catch {
    }
})
