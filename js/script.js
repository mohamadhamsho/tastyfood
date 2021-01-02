window.addEventListener('load', function(){

    var principalTitle = document.querySelector('.header-content');

    setTimeout(function(){
        
        principalTitle.classList.add('power')
    }, 500)
})


// Set A Nav Value
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.clientHeight;
const sectionBlock = document.querySelectorAll('.block');


const navbarItem = navbar.querySelectorAll('.navbar li');
const navToggle = document.querySelector('.navbar .navbar-toggler');

navToggle.addEventListener('click', function(){

    this.classList.toggle('active')

    navbar.classList.add('changed')
})

navbarItem.forEach(item =>{

    item.addEventListener('click', () =>{

        navbarItem.forEach(item => item.classList.remove('active'))

        item.classList.add('active')

        let navbarCollapse = document.querySelector('.collapse');

        navbarCollapse.classList.remove('show')

        if (navToggle.classList.contains('active')){

            navToggle.classList.remove('active')
        }
    })
})











// Set About Values
const about = document.querySelector('.about');
const aboutPartLeft = about.querySelector('.part-left');
const aboutPartRight = about.querySelector('.part-right');


const menu = document.querySelector('.menu');
const menuOffsetTop = menu.getBoundingClientRect().top;


// Window Scroll Event
window.addEventListener('scroll', ()=>{

    if (this.pageYOffset > navbar.getBoundingClientRect().top) {

        navbar.classList.add('changed')
    } else {
        navbar.classList.remove('changed')
    }
})






const tabsLinks = menu.querySelector('.tabs-links');
const tabsLinksItem = tabsLinks.querySelectorAll('li');

tabsLinksItem.forEach(item =>{

    item.addEventListener('click', function(){

        tabsLinksItem.forEach(item => item.classList.remove('active'))

        item.classList.add('active')
        const menuContent = menu.querySelector('.menu-content');
        const menuContentItem = menuContent.querySelectorAll('.menu-content > div');

        filterValue = item.getAttribute('data-filter');

        menuContentItem.forEach(item =>{
            
            menuFilterValue = item.getAttribute('data-category');

            if (filterValue === menuFilterValue) {

                menuContentItem.forEach(item => item.classList.remove('active'))

                item.classList.add('active')
            }
        })
    })

})



const ourTeam = document.querySelector('.our-team');
const teamContent = ourTeam.querySelector('.team-content');
const ourTeamTitle = ourTeam.querySelector('.title');
const teamContentOffset = teamContent.getBoundingClientRect().top;
window.addEventListener('scroll', reaval)

function reaval(){

    const windowHeight = window.innerHeight;
    const block = document.querySelectorAll('.block');

    block.forEach(item =>{

        let blockTop = item.getBoundingClientRect().top;
        let blockPixel = 400;

        if (blockTop < windowHeight - blockPixel) {

            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}


// Trigger Products Section Owl Carousel
    $('#test-carousel').owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });
