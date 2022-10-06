
const menu = document.querySelector('.menu-items')
const header = document.querySelector('.header')
const menuIcon = document.querySelector('.menu-icon')
const faqDesc = document.querySelectorAll('.question-sBox')
// const faqIcon = document.querySelector('.faq-icon i')


const menuItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Anoute',
        link: '/',
    },
    {
        name: 'Contu us',
        link: '/'
    },

    {
        name: 'Service',
        link: '/'
    },

]

menuItems.forEach((items, index) => {
    menu.innerHTML += `<li key=${index} ><a href=${items.link}>${items.name}</a></li>`
})

window.addEventListener('scroll', (e) => {
    header.classList.toggle('active-header', window.scrollY > 50)
})

let icon = false
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active-menu')

    if(icon){
        menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`
        icon = false
    }else{
        menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        icon = true
    }
})

faqDesc.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('faq-active')

    // chenge icon

    const faq = e.querySelector('.faq-icon i')

    if(faq.className === 'fa-solid fa-plus'){
        faq.className = 'fa-solid fa-minus'
    }else{
        faq.className = 'fa-solid fa-plus'
    }

    })
})
