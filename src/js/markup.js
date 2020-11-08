import { refs } from '../index.js';
import markupCard from '../templates/markup-card.hbs';
import 'material-design-icons/iconfont/material-icons.css';
import { openModal } from './modal.js';

function renderMarkup(images) {
    refs.imageGallery.insertAdjacentHTML('beforeend', markupCard(images));
    refs.imageGallery.addEventListener('click', openModal);
    scrollImages(images[0].id);
}

function scrollImages(id) {
    const positionY = document.getElementById(`${id}`).offsetTop;
    window.scrollTo({
        top: positionY,
        behavior: 'smooth',
    })
}

function clearMarkup() {
    refs.imageGallery.innerHTML = '';
}

export { renderMarkup, clearMarkup };