import { galleryItems } from './gallery-items.js';
// Change code below this line

function takeGalleryMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`).join('');
}

const markup = takeGalleryMarkup(galleryItems)

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', showOriginalImg);


function showOriginalImg (e) {
  
  
if (!e.target.classList.contains('gallery__image')) {
    return
}


const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="${e.target.alt}">`)
instance.show() 
window.addEventListener('keydown', onPressEsc)
function onPressEsc (e) {
  if (e.code !== 'Escape') {
    return;
  }
  instance.close()
  }
}

