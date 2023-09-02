import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector("ul");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handlePhoto);


function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item" id="preview">
    <a href="${original}" class="gallery__link">
      <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
    </a>
  </li>`;
    })
    .join("");
}

function handlePhoto(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">` 
  );

  modal.show();
}

console.log(galleryItems);
