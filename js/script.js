const menuBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const remove = document.querySelector('.nav-link');
const allCards = document.querySelectorAll('.card-one, .card-two, .card-three, .card-four, .card-five, .card-six, .show-details');
const hideButton = document.querySelector('.hide-button');
const details = document.querySelector('.detailed-info');
const date = document.querySelector('.date');
const sections = document.querySelectorAll('.section');
const allNavLinks = document.querySelectorAll('.nav-link');
const devDescription = document.querySelector('.dev-description');
const selectA = document.querySelector('.select-a');

const hideNav = () => {
    nav.classList.remove('show-menu')
    menuBtn.classList.toggle('change-burger')
}

const handleNav = () => {
    nav.classList.toggle('show-menu')
    menuBtn.classList.toggle('change-burger')
}

const hideDetails = () => {
    details.classList.remove('show-detailed-info')
    let active = document.querySelector('.active')
    // delay addition of display property, so content 
    // does not dissapear at the same time as click on 
    // button rolls back whole element
    setTimeout(() => {
        active.style.display = "none"
    }, 400);
    active.classList.remove('active');
}

const handleDetails = () => {
    details.classList.toggle('show-detailed-info')
}


allCards.forEach(item => {

    item.addEventListener('click', (e) => {

        let clickedContent = e.target.textContent;
        let preparedContent = clickedContent.slice(0, 5);
        const itemToShow = document.querySelector(`.${preparedContent}`);
        itemToShow.classList.add('active')
        itemToShow.style.display = "flex"
        handleDetails();
    })
})

const handleNavBtn = () => {
    const currentSection = window.scrollY;

    sections.forEach(section => {

        if (section.classList.contains('bright-section') && section.offsetTop <= currentSection + 10) {
            menuBtn.classList.add('black-menu-btn')
        } else if (!section.classList.contains('bright-section') && section.offsetTop <= currentSection + 10) {
            menuBtn.classList.remove('black-menu-btn')
        }
    })
}

const currentDate = () => {
    const year = (new Date).getFullYear();
    date.innerText = year;
}

let i = 0;

function updateDevDescription() {

    let adjectives = ['curious', 'growing', 'determined', 'focused', 'your future']

    // Remove select-a span textContent only if you 'a' is not needed
    // selectA.textContent = ""

    setTimeout(function () {
        devDescription.textContent = adjectives[i];
        i++;

        // Prepare select-a span textContent removal 
        // if (i === 3 ) {
        //     selectA.textContent = ""
        // }   

        if (i < adjectives.length) {
            updateDevDescription();
        }

    }, 600)
}

details.addEventListener('click', hideDetails);
menuBtn.addEventListener('click', handleNav);
currentDate();
window.addEventListener('scroll', handleNavBtn);
allNavLinks.forEach(navLink => {
    navLink.addEventListener('click', hideNav)
});

setTimeout(() => {
    updateDevDescription();
}, 2500);