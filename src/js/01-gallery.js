import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(item => markup(item)).join('');

galleryRef.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    caption: true,
    captionPosition: 'bottom',
    captionDelay: 250,
});

function markup({ original, preview, description }) {
    return `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
        `;
}