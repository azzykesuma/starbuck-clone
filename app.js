const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.sideNav');
const main = document.querySelector('main')

hamburger.addEventListener('click', () => {
    sideNav.classList.toggle('active')

    if(sideNav.classList.contains('active')) {
        hamburger.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
        main.style.backgroundColor = 'rgba(0,0,0,30%)'
    } else {
        hamburger.innerHTML = '<i style="font-size: 1.5em;" class="fas fa-bars color">'
        main.style.backgroundColor = 'unset'
    }
})