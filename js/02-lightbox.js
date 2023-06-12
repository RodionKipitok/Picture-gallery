import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imgsGallery = document.querySelector('.gallery');


const markup = galleryItems
	.map(({original,preview,description}) => `
    <div class="gallery__item">
    <a class="gallery__link" href=${original} ><img class="gallery__image" src=${preview} data-source=${original} alt='${description}'></img></a></div>`)
	.join('');
imgsGallery.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: "alt",
	captionDelay: 250,
});