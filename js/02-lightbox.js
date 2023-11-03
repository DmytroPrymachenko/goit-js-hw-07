import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItemsEl = galleryItems.map((galleryInfo) => {
  return `
    <li class="gallery__item">
  <a class="gallery__link" href="${galleryInfo.original}">
    <img
      class="gallery__image"
      src="${galleryInfo.preview}"
      alt="${galleryInfo.description}"
    />
  </a>
</li>
  `;
});
gallery.insertAdjacentHTML("beforeend", galleryItemsEl.join(""));

// const onGalleryItemClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
// };

// const SimpleLightboxOptions = {
// new  SimpleLightbox ( '.gallery', { } ) ;

// };
let gallerys = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: "250",
});
