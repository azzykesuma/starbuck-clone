const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.sideNav');
const main = document.querySelector('main')
const menuNav = document.querySelector('.menuNav');
const menuSideNav = document.querySelector('.menuSideNav');
const back = document.getElementById('back');

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

menuNav.addEventListener('click', () => {
    menuSideNav.style.display = 'block';
})

back.addEventListener('click', () => {
    menuSideNav.style.display = 'none'
})

// rewards page
const join = document.getElementById('join');
const cta = document.querySelector('.cta-join')
const header = document.getElementById('header_rules')
const headerTwo = document.getElementById('header_rules_two')

// rewriting innerHTML of join
const desktopView = window.matchMedia('(min-width : 47.8215em)');

const rewriteHtml = (q) => {
    if(q.matches) {
        join.innerHTML = `
            <p id="join"> Or <span><a href="#">join in the app</a></span> for the best experience </p>
        `
        cta.innerHTML = 'Join now'
        header.innerHTML = 'Create an account'
        headerTwo.innerHTML = 'Order and pay how you’d like'
    } else {
        join.innerHTML = `
        <a href="#" id="join">Or join online</a>
    `
        cta.innerHTML = 'Join in the app'
        header.innerHTML = 'Order and pay how you’d like'
        headerTwo.innerHTML = 'Download the Starbucks® app'
    }
}

desktopView.addListener(rewriteHtml);
rewriteHtml(desktopView)

// adding selected style for button
const pointWrap = document.querySelector('.pointsWrap')
const btn = pointWrap.getElementsByTagName('button')


for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
        btn[i].classList.add('clicked')
    })
}




