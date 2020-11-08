import '../node_modules/modern-normalize/modern-normalize.css';
import './css/styles.css';
import { ImageApiService } from './js/api-service.js';
import { renderMarkup } from './js/markup.js';

const refs = {
    searchForm: document.querySelector('#search-form'),
    imageGallery: document.querySelector('.gallery'),
    buttonLoad: document.querySelector('[data-action="load-more"]'),
}

refs.searchForm.addEventListener('submit', searchForm);
refs.buttonLoad.addEventListener('click', loadMore);

const imageApiService = new ImageApiService();

function searchForm(e) {
    e.preventDefault();
    imageApiService.searchQuery = e.currentTarget.elements.query.value;
    imageApiService.resetPage();
    imageApiService.fetchImages().then(renderMarkup);
}

function loadMore() {
    imageApiService.fetchImages().then(renderMarkup);
}

export { refs };







    
