import "./styles.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/modules/navigation.css";
import "swiper/modules/pagination.css";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination], // Registrem els mòduls
    loop: true, // Activa la repetició infinita
    slidesPerView: 1, // Mostra només una imatge a la vegada
    centeredSlides: true, // Centra els slides per evitar espais en blanc
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
