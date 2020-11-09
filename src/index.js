import '../node_modules/modern-normalize/modern-normalize.css';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageApiService } from './js/api-service.js';
import { clearMarkup, loadImages } from './js/markup.js';
import { BtnLoadMore } from './js/load-more-btn.js';
import { clientError } from './js/notification.js';

const refs = {
    searchForm: document.querySelector('#search-form'),
    imageGallery: document.querySelector('.gallery'),
}
const imageApiService = new ImageApiService();
const btnLoadMore = new BtnLoadMore({
    selector: '[data-action="load-more"]',
    hidden: true,
});

refs.searchForm.addEventListener('submit', searchForm);
btnLoadMore.refs.btnLoad.addEventListener('click', loadImages);

function searchForm(e) {
    e.preventDefault();
    imageApiService.searchQuery = e.currentTarget.elements.query.value;
    btnLoadMore.show();
    clearMarkup();

    if (imageApiService.searchQuery.match(/[a-zA-Zа-яА-ЯёЁ]/)) {
        imageApiService.resetPage();
        loadImages();
    } else {
        btnLoadMore.hide();
        clientError();
}
}

export { refs, imageApiService, btnLoadMore };







    
