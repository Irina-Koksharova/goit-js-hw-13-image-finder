import { refs } from '../index.js';
import markupCard from '../templates/markup-card.hbs';
import 'material-design-icons/iconfont/material-icons.css';
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

function loadImages() {
    btnLoadMore.disable();
    imageApiService.fetchImages().then(images => {
        renderMarkup(images),
        btnLoadMore.enable()    
    }).catch(error => {
        btnLoadMore.hide();
        apiError();
    });
}

function clearMarkup() {
    refs.imageGallery.innerHTML = '';
}

export { renderMarkup, clearMarkup, loadImages };