const quickViewButtons = document.querySelectorAll(".quick-view");
const modal = document.querySelector("#quick-view-modal");
const closeButton = document.querySelector(".modal-close");

const modalImage = document.querySelector("#modal-image");
const modalBrand = document.querySelector("#modal-brand");
const modalName = document.querySelector("#modal-name");
const modalPrice = document.querySelector("#modal-price");

quickViewButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const productCard = button.closest(".product-card");

    const image = productCard.querySelector("img");
    const brand = productCard.querySelector(".card__brand");
    const name = productCard.querySelector(".card__name");
    const price = productCard.querySelector(".product-card__price");

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalBrand.textContent = brand.textContent;
    modalName.textContent = name.textContent;
    modalPrice.textContent = price.textContent;

    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});