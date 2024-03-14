const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'fade',
    speed: 1000,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-arrow-right',
      prevEl: '.swiper-arrow-left',
    },
});