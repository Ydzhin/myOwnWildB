const mySwiper = new Swiper(".swiper-container", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
});

const buttonCart = document.querySelector(".button-cart");
const modalCart = document.querySelector("#modal-cart");

const openModal = () => {
  modalCart.classList.add("show");
};

const closeModal = () => {
  modalCart.classList.remove("show");
};

buttonCart.addEventListener("click", openModal);

modalCart.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.classList.contains("overlay") ||
    target.classList.contains("modal-close")
  ) {
    closeModal();
  }
});

const scrollLinks = document.querySelectorAll("a.scroll-link");

for (let i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener("click", (event) => {
                console.log(event);
    event.preventDefault();
    const id = scrollLinks[i].getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
