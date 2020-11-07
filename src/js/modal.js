import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onImageClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery-image')) {
    return;
  }
    const modal = basicLightbox.create(`<img src=${e.target.parentNode.href} alt=${e.target.alt}/>`);
    modal.show();
}

export { onImageClick };