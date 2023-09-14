
// $( document ).ready(function() {
  

    // //burger menu
    
    // const burger = document.getElementById('burger');
    // const burgerSpan = document.querySelector('.burger-span');
    // const nav = document.querySelector('.header_nav');
    // const header = document.querySelector('.header');
    // const body = document.querySelector("body")
    // const navItem = document.querySelectorAll('.header_nav-item');
    // const html = document.querySelector("html")
    
    // burger.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     // console.log(header.offsetTop)
    //     const posY = header.offsetTop
    //     nav.style.top =(67 + posY)+"px"
    //     nav.classList.toggle('header_nav-active');
    //     burgerSpan.classList.toggle('active');
    
    //     // nav.classList.contains('header_nav-active') ? body.style.overflowY = 'hidden' : body.style.overflowY = ''
    //     nav.classList.contains('header_nav-active') ? html.style.overflowY = 'hidden' : html.style.overflowY = ''
    
        
        
    // })
    
    // navItem.forEach(element => element.addEventListener('click',(e) => {
    //     e.preventDefault()
    //     if(nav.classList.contains('header_nav-active')){
    //         nav.classList.toggle('header_nav-active');
    //         burgerSpan.classList.toggle('active');
        
    //         // nav.classList.contains('header_nav-active') ? body.style.overflowY = 'hidden' : body.style.overflowY = ''
    //         nav.classList.contains('header_nav-active') ? html.style.overflowY = 'hidden' : html.style.overflowY = ''
    
    //     }
       
        
        
    // }));
    
    
    
    // scroll to link
    // Select all links with hashes
    // $('a[href*="#"]')
    //   // Remove links that don't actually link to anything
    //   .not('[href="#"]')
    //   .not('[href="#0"]')
    //   .on('click', function(event) {
    //     // On-page links
    //     if (
    //       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    //       && 
    //       location.hostname == this.hostname
    //     ) {
    //       // Figure out element to scroll to
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //       // Does a scroll target exist?
    //       if (target.length) {
    //         // Only prevent default if animation is actually gonna happen
    //         event.preventDefault();
    //         $('html, body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000, function() {
    //           // Callback after animation
    //           // Must change focus!
    //           var $target = $(target);
    //           $target.trigger('focus');
    //           if ($target.is(":focus")) { // Checking if the target was focused
    //             return false;
    //           } else {
    //             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    //             $target.trigger('focus'); // Set focus again
    //           };
    //         });
    //       }
    //     }
    //   });
    
    
  
    
    //-----------------anim----------------------
    
    
    gsap.registerPlugin(ScrollTrigger);
    
    function animLeft(el,stagger = 0.2){
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
          stagger: stagger
        }) 
    }
    function animRight(el,stagger = 0.2){
      gsap.from(el, {
          duration:1, x:"110%",opacity: 0, ease:Power3.easeOut, 
          scrollTrigger: {
          trigger:el,
          markers:false,
          start:"top 75%", //when top of herman passes 75% viewport height
          end:"bottom 25%", //when bottom of herman passes 25% viewport height
          
             //events: onEnter onLeave onEnterBack onLeaveBack
          toggleActions:"play",
            //options: play, pause, resume, reset, restart, complete, reverse,none
       
          
          },
          onComplete: () => { 
            // console.log(el)
            if(el ==".spiner_item"){
              gsap.utils.toArray(el).forEach(elem => {
                let hover = gsap.to(elem,
                  {
                    scale: 1.1,
                    rotate:10,
                    duration: 0.3,
                    paused: true,
                    ease: "power1.inOut"
                  });
                elem.addEventListener("mouseenter", () => hover.play());
                elem.addEventListener("mouseleave", () => hover.reverse());
              });
            }
           
            
        },
          stagger: stagger
        }) 
    }
    function animUp(el,stagger = 0.2){
        gsap.from(el, {
          duration:1, y:"300",opacity: 0, ease:Power3.easeOut, 
            scrollTrigger: {
            trigger:el,
            markers:false,
            start:"top 75%", //when top of herman passes 75% viewport height
            end:"bottom 25%", //when bottom of herman passes 25% viewport height
            
               //events: onEnter onLeave onEnterBack onLeaveBack
            toggleActions:"play"
              //options: play, pause, resume, reset, restart, complete, reverse,none
            },
            stagger: stagger
          }) 
      }
    animLeft('#main_img--left')
    animRight("#main_img--right", 0.1)
    animUp('#main_img--center')
    animLeft('.main_text-wrap',0.5)
    animLeft('.about_img')
    animLeft('.faq_img')
    animRight(".about_text")
    animRight(".prefooter_right")
    animUp('.prefooter-form')
    animUp('.services-cart')
    animUp('.accordion-item')

   
    
    
    
    
    
    
    
    
    
    
    
    
    // });