import { refs } from '../index.js';
import markupCard from '../templates/markup-card.hbs';
import { onImageClick } from './modal.js';

function renderMarkup(images) {
    const markup = markupCard(images);
    refs.imageGallery.insertAdjacentHTML('afterbegin', markup);
    refs.imageGallery.addEventListener('click', onImageClick);
}

export { renderMarkup };