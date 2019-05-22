(function () {

  "use strict";

///////////// Open / Close sidebar in mobile version  /////////////

  var btnNavOpen = document.querySelector('.main-nav__show');
  var mainNav = document.querySelector('.main-nav');
  var overlay = document.querySelector('.overlay')
  var closeNav = document.querySelector('.close-popup');

  var closeBar = function() {
    mainNav.classList.add('main-nav--hidden');
    btnNavOpen.classList.remove('main-nav__show--active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = 'auto';
  }

  var openBar = function() {
    mainNav.classList.remove('main-nav--hidden');
    btnNavOpen.classList.add('main-nav__show--active');
    overlay.classList.add('overlay--active');
    document.body.style.overflow = 'hidden';
  }

  btnNavOpen.addEventListener('click', function(){
    if(!btnNavOpen.classList.contains('main-nav__show--active')) {
      openBar();
    } else {
      closeBar();
    }
  });

  closeNav.addEventListener('click', function(){
    if(!btnNavOpen.classList.contains('main-nav__show--active')) {
      openBar();
    } else {
      closeBar();
    }
  });

  overlay.addEventListener('click', function() {
    if(overlay.classList.contains('overlay--active')) {
      closeBar();
    }
  });

/////////////  Open / Close catalog in mobile version  /////////////

  var catalogBtnShow = document.querySelector('.catalog__show');
  var catalogBlock = document.querySelector('.catalog__list');

  catalogBtnShow.addEventListener('click', function(evt){
    evt.preventDefault();
    if(!catalogBlock.classList.contains('catalog__list--hidden')) {
      catalogBlock.classList.add('catalog__list--hidden');
    } else {
      catalogBlock.classList.remove('catalog__list--hidden');
    }
  });

////////// Jquery Plugin Slider ////

$(document).ready(function(){
  $('.slider__list').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: ["Prev", "Next"],
  })
  });
  $('.carousel-items').owlCarousel({
    loop:true,
    items: 8,
    margin: 20,
    mergeFit: true,
    responsiveClass:true,
    nav: true,
    navText: ["Prev", "Next"],
    responsive:{
        0:{
            items:2,
            nav: true,
        },
        768:{
            items:3,
            nav: true,
            margin: 60,
        },
        1024: {
            items:4,
            margin: 60,
        },
        1390:{
            items:5,
            margin: 77,
        }
    }
})
  $('.features-list').owlCarousel({
    items: 8,
    margin: 20,
    mergeFit: true,
    responsiveClass:true,
    nav: true,
    dots: false,
    navText: ["Prev", "Next"],
    responsive:{
        0:{
            items:2,
            nav: true,
            dots: false,
        },
        768:{
            items:3,
            nav: true,
            margin: 60,
            dots: false,
        },
        1024: {
            items:4,
            margin: 60,
            dots: false,
        },
        1400:{
            items:5,
            margin: 77,
        }
    }
})

})();
