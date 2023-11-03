import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
let galleryImages = "";

for (const item of galleryItems) {
  galleryImages += `<a class="gallery_item" href="${item.original}">
    <img class="gallery_image" src="${item.preview}" alt="${item.description}" />
  </a>`;
}

gallery.insertAdjacentHTML("beforeend", galleryImages);
