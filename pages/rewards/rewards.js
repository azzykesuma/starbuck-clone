// changing image based on rewards click
let reward_item = document.getElementById('reward_item');
let reward_desc = document.getElementById('reward_desc');

let reward = document.getElementById('rewards_item');
console.log(reward)
const starBtn = document.querySelectorAll('.starBtn');

starBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === '25') {
            reward.src = './asset/025.png'
            reward_item.innerHTML = 'Customize your drink';
            reward_desc.innerHTML = `Make your drink just right with an extra espresso shot, 
                            dairy substitute or a dash of your favorite syrup. `
        } else if (e.target.id === '50') {
            reward.src = './asset/050.png'
            reward_item.innerHTML = `Brewed hot coffee, bakery item or hot tea`;
            reward_desc.innerHTML = `Pair coffee cake or an almond croissant with your fresh cup of hot brew.`
        } else if (e.target.id === '150') {
            reward.src = './asset/150.png'
            reward_item.innerHTML = 'Handcrafted drink, hot breakfast or parfait';
            reward_desc.innerHTML = 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.';
        } else if (e.target.id === '200') {
            reward.src = './asset/200.png'
            reward_desc.innerHTML = 'Salad, sandwich or protein box';
            reward_desc.innerHTML = 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.';
        } else if (e.target.id === '400') {
            reward.src = './asset/400.png'
            reward_item.innerHTML = 'Select merchandise or at-home coffee';
            reward_desc.innerHTML = 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.';
        }
    })
})

// form validation
const redeem = document.querySelector('.redeem');
const formTag = redeem.getElementsByTagName('form');

const redeemForm = document.getElementById('redeemForm');
const redeemBtn = document.querySelector('.redeemBtn')
const warning = document.querySelector('.warning')
const label = document.getElementById('label')



redeemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(redeemForm.value === '') {
        warning.classList.add('showWarning')
        if(warning.classList.contains('showWarning')) {
            redeemForm.style.border = '1px solid red'
        }
    }
})

redeem.addEventListener('click', e => {
    if(e.target === redeemForm) {
        label.style.display = 'block'
        redeemForm.placeholder = ''
    } else {
        label.style.display = 'none'
        redeemForm.placeholder = 'Enter your star code'
    }
})