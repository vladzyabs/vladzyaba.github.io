//menu
const menu = document.getElementById('menu');
const link = document.querySelectorAll('.menu__nav-link');
const burger = document.getElementById('burger');
const burgerLine = document.querySelectorAll('.burger__line');
let activeMenu = false;

const showMenu = () => {
    menu.classList.add('menu__show');
    activeMenu = true;

    for (let i = 0; i < burgerLine.length; i++) {
        burgerLine[i].classList.add('burger__line-close');
    }
};
const hideMenu = () => {
    menu.classList.remove('menu__show');
    activeMenu = false;

    for (let i = 0; i < burgerLine.length; i++) {
        burgerLine[i].classList.remove('burger__line-close');
    }
};
burger.onclick = () => {
    (!activeMenu) ? showMenu() : hideMenu();
    for ( let i = 0; i < link.length; i++) {
      link[i].addEventListener('click', () => {
        hideMenu();
      })
    }
};

// planned scrolling
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());

// ########################################################################################################
// jquery code ############################################################################################
// ########################################################################################################


//intro-slider

$('.intro-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/svg/prev-arrow.svg" alt="prev arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/svg/next-arrow.svg" alt="next arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
    ]
  });


//reviews-slider

$('.reviews-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});