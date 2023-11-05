
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
    
function createMarkUp(galleryArray) {
    const item = galleryArray.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description}/>
            </a>
        </li>`;
    }).join("");
    gallery.insertAdjacentHTML('afterbegin', item);
}


createMarkUp(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});