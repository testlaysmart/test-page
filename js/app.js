const video = document.querySelector('.swiper video');

const swiperText = new Swiper('.swiper', {
   speed: 1200,
   mouseweel: {},
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
   },
});

swiperText.on('slideChange', function () {
   gsap.to(video, 1.2, {
      currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
   });
});
