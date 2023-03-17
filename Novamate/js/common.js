
$( document ).ready(function() {
  

//burger menu

const burger = document.getElementById('burger');
const burgerSpan = document.querySelector('.burger-span');
const nav = document.querySelector('.header_nav');
const header = document.querySelector('.header');
const body = document.querySelector("body")
const navItem = document.querySelectorAll('.header_nav-item');

burger.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(header.offsetTop)
    const posY = header.offsetTop
    nav.style.top =(67 + posY)+"px"
    nav.classList.toggle('header_nav-active');
    burgerSpan.classList.toggle('active');

    nav.classList.contains('header_nav-active') ? body.style.overflowY = 'hidden' : body.style.overflowY = ''
    
    
})

navItem.forEach(element => element.addEventListener('click',(e) => {
    e.preventDefault()
    if(nav.classList.contains('header_nav-active')){
        nav.classList.toggle('header_nav-active');
        burgerSpan.classList.toggle('active');
    
        nav.classList.contains('header_nav-active') ? body.style.overflowY = 'hidden' : body.style.overflowY = ''
    }
   
    
    
}));

// scroll to link
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.trigger('focus');
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.trigger('focus'); // Set focus again
          };
        });
      }
    }
  });


//sliders

  $(".works_step-wrap").slick({ 
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'custom-dots', //slick generates this <ul.custom-dots> within the appendDots container
    customPaging: function (slider, i) {return}
  });
  

  let slickValue = false;
    function valueSlider(){    
        if($(window).width() < 670){
            if(!slickValue){
                $(".value_card-wrap").slick({
                  dots: true,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 1.2,
                  slidesToScroll: 1,
                  arrows: false,
                  dotsClass: 'custom-dots value-slider-dots', //slick generates this <ul.custom-dots> within the appendDots container
                  customPaging: function (slider, i) {return},
                });
                slickValue = true;
            }
        } else if($(window).width() > 670){
              if(slickValue){
              $('.value_card-wrap').slick('unslick');
              slickValue = false;
          }
      }
            
    };
    let slickPrice = false;
    function priceSlider(){    
        if($(window).width() < 880){
            if(!slickPrice){
                $(".pricing_card-wrap").slick({
                  dots: false,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 1.2,
                  slidesToScroll: 1,
                  arrows: true,
                  prevArrow: $('.pricing-arrow--prev'),
                  nextArrow: $('.pricing-arrow--next'),
                  dotsClass: 'custom-dots value-slider-dots', //slick generates this <ul.custom-dots> within the appendDots container
                  customPaging: function (slider, i) {return},
             
                });
                slickPrice = true;
            }
        } else if($(window).width() > 880){
              if(slickPrice){
              $('.pricing_card-wrap').slick('unslick');
              slickPrice = false;
          }
      }
            
    };
    let slickLoved = false;
    function lovedSlider(){    
        if($(window).width() < 880){
            if(!slickLoved){
                $(".loved_card-wrap").slick({
                  dots: false,
                  infinite: false,
                  speed: 500,
                  slidesToShow: 1.2,
                  slidesToScroll: 1,
                  arrows: true,
                  prevArrow: $('.loved-arrow--prev'),
                  nextArrow: $('.loved-arrow--next'),
                  dotsClass: 'custom-dots value-slider-dots', //slick generates this <ul.custom-dots> within the appendDots container
                  customPaging: function (slider, i) {return},
                });
                slickLoved = true;
            }
        } else if($(window).width() > 880){
              if(slickLoved){
              $('.loved_card-wrap').slick('unslick');
              slickLoved = false;
          }
      }
            
    };
    

    valueSlider()
    priceSlider()
    lovedSlider()
    $(window).on('resize', function(){
       
      valueSlider()
      priceSlider()
      lovedSlider()
    });

//-----------------anim----------------------


gsap.registerPlugin(ScrollTrigger);

function animLeft(el){
  gsap.from(el, {
    duration:1, x:"-300",opacity: 0, ease:Power3.easeOut, 
      scrollTrigger: {
      trigger:el,
      markers:false,
      start:"top 75%", //when top of herman passes 75% viewport height
      end:"bottom 25%", //when bottom of herman passes 25% viewport height
      
         //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"play"
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
      stagger: 0.2
    }) 
}
function animRight(el){
  gsap.from(el, {
    duration:1, x:"110%",opacity: 0, ease:Power3.easeOut, 
      scrollTrigger: {
      trigger:el,
      markers:false,
      start:"top 75%", //when top of herman passes 75% viewport height
      end:"bottom 25%", //when bottom of herman passes 25% viewport height
      
         //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"play"
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
      stagger: 0.2
    }) 
}
function animUp(el,trigger){
  gsap.from(el, {
    duration:1, y:"110%",opacity: 0, ease:Power3.easeOut, 
      scrollTrigger: {
      trigger:trigger||el,
      markers:false,
      start:"top 75%", //when top of herman passes 75% viewport height
      end:"bottom 25%", //when bottom of herman passes 25% viewport height
      
         //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"play"
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
      stagger: 0.2
    }) 
}
animLeft('.hero_content')
animRight(".spiner_item")
animUp('.value_card',".value_inner" )
animLeft('.direct_img')
animRight(".direct_text")
animUp('.loved_card',".loved_card-wrap" )
animLeft('#questions_details-row-left')
animRight("#questions_details-row-right")
animUp('.clients_item',".clients_item-wrap" )










});
