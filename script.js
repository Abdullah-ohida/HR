// Select Element
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

// =======Toggle btn============
navToggle.addEventListener('click', function () {
    linksContainer.classList.toggle('show-links');
    navToggle.classList.toggle('show-icon')
});

const navBar = document.querySelector('.nav');
// const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }
    // if (scrollHeight > 500) {
    //     topLink.classList.add("show-top")
    // } else {
    //     topLink.classList.remove("show-top")
    // }
});

// ========= Date ===========
// const date = document.querySelector('.date');
// date.innerHTML = new Date().getFullYear();

//  ======Top Link =======
// const topLink = document.querySelector('.top-link')

// window.addEventListener('scroll', function () {
//     const scrollHeight = window.pageYOffset;
//     if (scrollHeight > 500) {
//         topLink.classList.add('show-top');
//     } else {
//         topLink.classList.remove('show-top')
//     }
// });
