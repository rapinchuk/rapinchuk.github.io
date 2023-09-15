//burger menu
    
    const burger = document.getElementById('burger');
    const burgerSpan = document.querySelector('.burger-span');
    const nav = document.querySelector('.header_col');
    const header = document.querySelector('.header');
    const body = document.querySelector("body")
    const navItem = document.querySelectorAll('.header-menu_list-item');
    const html = document.querySelector("html")
    
    burger.addEventListener('click', (e) => {
        e.preventDefault()
        // console.log(header.offsetTop)
        // const posY = header.offsetTop
        // nav.style.top =(67 + posY)+"px"
        // nav.classList.toggle('header_nav-active');
        burgerSpan.classList.toggle('active');
        nav.classList.toggle('header_nav-active');
    
        // nav.classList.contains('header_nav-active') ? body.style.overflowY = 'hidden' : body.style.overflowY = ''
        nav.classList.contains('header_nav-active') ? html.style.overflowY = 'hidden' : html.style.overflowY = ''
    
        
        
    })
    
    navItem.forEach(element => element.addEventListener('click',(e) => {
        // e.preventDefault()
        if(nav.classList.contains('header_nav-active')){
            nav.classList.toggle('header_nav-active');
            burgerSpan.classList.toggle('active');
        
            // nav.classList.contains('header_nav-active') ? body.style.overflowY = 'hidden' : body.style.overflowY = ''
            nav.classList.contains('header_nav-active') ? html.style.overflowY = 'hidden' : html.style.overflowY = ''
    
        }
       
        
        
    }));