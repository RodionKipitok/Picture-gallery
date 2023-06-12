import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgsGallery = document.querySelector('.gallery');

// Тут мі создаем  разметку 


const markup = galleryItems
	.map(({original,preview,description}) => `
    <div class="gallery__item">
    <a class="gallery__link" href=${original} ><img class="gallery__image" src=${preview} data-source=${original} alt='${description}'></img></a></div>`)
	.join('');

// Тут мы добавляем разметку  

imgsGallery.insertAdjacentHTML('afterbegin', markup)

// Тут мы добавляем слушатителя событий 

imgsGallery.addEventListener('click',onImgClick);



function onImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const modalImage = basicLightbox.create(`<img src='${e.target.dataset.source}'>`);

  modalImage.show();

  document.addEventListener(
    'keydown',
    e => {
      if (e.code !== 'Escape') {
        return;
      }
      modalImage.close();
    },
    { once: true },
  );
}
