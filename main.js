const menuMobile = document.getElementById('menu_mobile')
const navbarMenu = document.getElementById('navbar_menu')
const maskBackground = document.getElementById('mask')

menuMobile.addEventListener('click', () => {
    maskBackground.classList.toggle('show_mask')
    navbarMenu.classList.toggle('show_menu')
    menuMobile.classList.toggle('menu_mobile_close')
})

anime({
    targets: '.header',
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeInOutQuad'
})

anime({
    targets: '.content_left_hero_img',
    opacity: [0, 1],
    translateY: [-30, 0],
    duration: 500,
    easing: 'easeInOutQuad'
})

anime({
    targets: '.aside, .content_left_info',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 500,
    delay: 100,
    easing: 'easeInOutQuad'
})

anime({
    targets: '.footer_card',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 500,
    delay: 300,
    easing: 'easeInOutQuad'
})

