/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToogle = document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close');
/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToogle){
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*=============== IMAGE GALLERY ===============*/
function imgGallery(){
    const mainImg = document.querySelector('.details__img'),
    smallImg = document.querySelectorAll('.details__small-img');

    smallImg.forEach((img) => {
        img.addEventListener('click', function() {
            mainImg.src = this.src;
        })
    })
}

/*=============== SWIPER CATEGORIES ===============*/

/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Get the target content based on the data attribute of the clicked tab
            const targetSelector = tab.dataset.target;
            const target = document.querySelector(targetSelector);

            // Remove active class from all tab contents
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove('active-tab');
            });

            // Add active class to the clicked tab content
            if (target) {
                target.classList.add('active-tab');
            }

            // Remove active class from all tabs
            tabs.forEach((tab) => {
                tab.classList.remove('active-tab');
            });

            // Add active class to the clicked tab
            tab.classList.add('active-tab');   
        });
    });
});
