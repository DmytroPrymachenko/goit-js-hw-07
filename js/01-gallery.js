import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
console.log(basicLightbox);
// Change code below this line

console.log(galleryItems);
let instance = null;
const gallery = document.querySelector(".gallery");

const galleryItemsEl = galleryItems.map((galleryItemInfo) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItemInfo.original}">
        <img
          class="gallery__image"
          src="${galleryItemInfo.preview}"
          data-source="${galleryItemInfo.original}"
          alt="${galleryItemInfo.description}"
        />
      </a>
    </li>
  `;
});

gallery.insertAdjacentHTML("beforeend", galleryItemsEl.join(""));

const onGalleryItemClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalPath = event.target.dataset.source;
  console.dir(originalPath);

  const basicLightboxOptions = {
    onClose() {
      document.removeEventListener("keydown", onDocumentKeyPress);
    },
  };

  instance = basicLightbox.create(
    `
    <img src="${originalPath}" width="800" height="600">
`,
    basicLightboxOptions
  );

  instance.show();

  document.addEventListener("keydown", onDocumentKeyPress);
};

const onDocumentKeyPress = ({ code }) => {
  console.log(code);

  if (code === "Escape") {
    instance.close();
  }
};

gallery.addEventListener(`click`, onGalleryItemClick);
