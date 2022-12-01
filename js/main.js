var swiper = new Swiper(".slide-char", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints:{
      320: {
        slidesPerView: 1.2,
        spaceBetween: 19,
      },
      
      768:{
        slidesPerView: 2.05,
        spaceBetween: 19,
      },
      991:{
        slidesPerView: 3.05,
        spaceBetween: 19,
      },
      1200:{
        slidesPerView: 3.3,
        spaceBetween: 11,
      },

    },
});


AOS.init({
  duration: 1000,
  once: true,
});