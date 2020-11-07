import '../node_modules/modern-normalize/modern-normalize.css';
import './css/styles.css';
import { renderMarkup } from './js/markup.js';

const refs = {
    searchForm: document.querySelector('#search-form'),
    imageGallery: document.querySelector('.gallery'),
    buttonLoad: document.querySelector('[data-action="load-more"]'),
}

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
    e.preventDefault();
    const KEY = '19018418-5cf416ff9d3b144c810bafa25';
    const searchQuery = e.currentTarget.elements.query.value;
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${KEY}`)
    .then(response => response.json())
    .then(renderMarkup)
}

export { refs };







    
