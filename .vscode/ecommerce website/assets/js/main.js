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

// Login & Register
const formRegister = document.getElementById('form-register');
const formLogin = document.getElementById('form-login');

const username = document.getElementById('txtUsername');
const passWord = document.getElementById('txtPassword');

const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

const userNameRes = document.getElementById('txtUsernameRes');
const passWordRes = document.getElementById('txtPasswordRes');
const email = document.getElementById('txtEmail');
const rePassword = document.getElementById('txtRePassword');

const emailError = document.getElementById('emailError');
const usernameErrorRes = document.getElementById('usernameErrorRes');
const passwordErrorRes = document.getElementById('passwordErrorRes');
const repasswordError = document.getElementById('repasswordError');

function validateEmail(email) {
  return String(email)
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


function validateUsername(username) {
  return String(username)
    .match(
      /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,16}$/
    );
};

function validatePassword(password) {
  return String(password)
    .match(
      /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/
    );
};

formRegister.addEventListener('submit', function(e){
    e.preventDefault();

    if(!email.value){
        emailError.style.display = "block";
        emailError.innerHTML = "Required"
    }
    else{
        emailError.style.display = "none";
        if(!validateEmail(email.value)){
            emailError.style.display = "block";
            emailError.innerHTML = "Not Valid"
        }
    }

    if(!userNameRes.value){
        usernameErrorRes.style.display = "block";
        usernameErrorRes.innerHTML = "Required"
    }
    else{
        usernameErrorRes.style.display = "none";
        if(!validateUsername(userNameRes.value)){
            usernameErrorRes.style.display = "block";
            usernameErrorRes.innerHTML = "Not Valid"
        }
    }

    if(!passWordRes.value){
        passwordErrorRes.style.display = "block";
        passwordErrorRes.innerHTML = "Required"
    }
    else{
        passwordErrorRes.style.display = "none";
        if(!validatePassword(passWordRes.value)){
            passwordErrorRes.style.display = "block";
            passwordErrorRes.innerHTML = "Not Valid"
        }
    }

    if(!rePassword.value){
        repasswordError.style.display = "block";
        repasswordError.innerHTML = "Required"
    }
    else{
        repasswordError.style.display = "none";
        if(passWordRes.value !== rePassword.value){
            repasswordError.style.display = "block";
            repasswordError.innerHTML = "Passwords do not match"
        }
    }
    if(
        userNameRes.value && 
        email.value && 
        passWordRes.value && 
        rePassword.value && 
        passWordRes.value === rePassword.value &&
        validateEmail(email.value)&&
        validateUsername(userNameRes.value)&&
        validatePassword(passWordRes.value))
    {
        console.log('submit')
    }
})

formLogin.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(!username.value){
        usernameError.style.display = "block";
        usernameError.innerHTML = "Required"
    }
    else{
        usernameError.style.display = "none";
        if(!validateUsername(username.value)){
            usernameError.style.display = "block";
            usernameError.innerHTML = "Not Valid"
        }
    }

    if(!passWord.value){
        passwordError.style.display = "block";
        passwordError.innerHTML = "Required"
    }
    else{
        passwordError.style.display = "none";
        if(!validatePassword(passWord.value)){
            passwordError.style.display = "block";
            passwordError.innerHTML = "Not Valid"
        }
    }

    if(
        username.value && 
        passWord.value && 
        validateUsername(username.value)&&
        validatePassword(passWord.value))
    {
        console.log('submit')
    }
})

