import "./index.css";

// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 7500
  },
  speed: 500,
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
