 /*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // showing show-menu class if toggle and nav exsist.
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link we remove the show-menu class.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

// change background header

function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scrolll is greater the 200 viewport height add the scroll header class to the header tag.
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader)

// Show scroll top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scrolll is greater the 560 viewport height add the scroll header class to the header tag.
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')

}

window.addEventListener('scroll', scrollTop)


// Dark light theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';







// Activate and deactivate the theme through the button
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
})