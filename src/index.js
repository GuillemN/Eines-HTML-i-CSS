import "./styles/main.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/modules/navigation.css";
import "swiper/modules/pagination.css";

document.addEventListener("DOMContentLoaded", function () {
  // Swiper
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // YouTube Lazy Load
  const loadBtn = document.getElementById("load-video");
  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.src = "https://www.youtube.com/embed/CmnHfK4JkGw?si=NMmzj27kLp4FAILm&autoplay=1";
      iframe.title = "YouTube video player";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      iframe.classList.add("video-embed");
      loadBtn.replaceWith(iframe);
    });
  }
});
