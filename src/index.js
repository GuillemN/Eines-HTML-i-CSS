import "./styles/main.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/modules/navigation.css";
import "swiper/modules/pagination.css";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination], // Registrem els mòduls
    loop: true, // Activa repetició d'imatges
    slidesPerView: 1, // Mostra una imatge a la vegada
    centeredSlides: true, // Centra els slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
