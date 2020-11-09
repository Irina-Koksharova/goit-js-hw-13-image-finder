import 'material-design-icons/iconfont/material-icons.css';
import markupCard from '../templates/markup-card.hbs';
import { refs } from '../index.js';
import { openModal } from './modal.js';
import { btnLoadMore } from '../index.js';
import { apiError } from './notification.js';
import { imageApiService } from '../index.js';

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

async function loadImages() {
    try {
        btnLoadMore.disable();
        const response = await imageApiService.fetchImages();
        const markup = (images) => {
            renderMarkup(images),
            btnLoadMore.enable()  
        }
        return markup(response);
    } catch {
        btnLoadMore.hide();
        apiError();
    }
}

function clearMarkup() {
    refs.imageGallery.innerHTML = '';
}

export { renderMarkup, clearMarkup, loadImages };