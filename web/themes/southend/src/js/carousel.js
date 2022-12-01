// SplideJS Slider. See full docs at:
// https://splidejs.com/
// document.addEventListener('DOMContentLoaded', function () {
//   var splide = new Splide('.splide', {
//     type         : 'loop',
//     perPage      : 1,
//     autoplay     : false,
//     interval     : 15000, // How long to display each slide
//     pauseOnHover : false, // must be false
//     pauseOnFocus : false, // must be false
//     resetProgress: false,
//     classes: {
//       pagination: 'splide__pagination splide__custom',
//     }
//   }).mount();
// });

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide('#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : true,
  });

  var thumbnails = new Splide('#thumbnail-carousel', {
    fixedWidth : 150,
    // fixedHeight: 60,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    focus      : 'center',
    breakpoints: {
      1024: {
        fixedWidth : 110,
      },
      739: {
        fixedWidth : 150,
      },
      544: {
        fixedWidth : 100,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
