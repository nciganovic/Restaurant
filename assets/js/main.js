var database = {
    slider:{
        first:{
            title:"Frist Slider",
            desc: "Description of first slider",
            imgUrl:"url('assets/img/slider/1.jpg')"
        },
        second:{
            title:"Second Slider",
            desc: "Description of second slider",
            imgUrl:"url('assets/img/slider/2.jpg')"
        },
        third:{
            title:"Third Slider",
            desc: "Description of third slider",
            imgUrl:"url('assets/img/slider/3.jpg')"
        }
    }
}
/* TODO change  bgImageHolder.style.backgroundImage to classList add or something */
var dot = document.getElementsByClassName('dot');
var sliderHeadline = document.querySelector('.mu-top-slider-content h2');
var sliderDescription = document.querySelector('.mu-top-slider-content p');
var bgImageHolder = document.querySelector('.mu-top-slider-single');

var currentSlide = 0;

/** Setting default values **/
sliderHeadline.innerText = database.slider.first.title;
sliderDescription.innerText = database.slider.first.desc;

dot[0].addEventListener('click', changeToSlide1);
dot[1].addEventListener('click', changeToSlide2);
dot[2].addEventListener('click', changeToSlide3);

function changeToSlide1(){
    clearInterval(timer);
    window.timer = setInterval(changeSlideAuto, 5000);
    
    dot[0].classList.add('bg-yellow');
    dot[1].classList.remove('bg-yellow');
    dot[2].classList.remove('bg-yellow');
    
    sliderHeadline.innerText = database.slider.first.title;
    sliderDescription.innerText = database.slider.first.desc;
    bgImageHolder.style.backgroundImage = database.slider.first.imgUrl;

    currentSlide = 1;
}

function changeToSlide2(){
    
    clearInterval(timer);
    window.timer = setInterval(changeSlideAuto, 5000);

    dot[0].classList.remove('bg-yellow');
    dot[1].classList.add('bg-yellow');
    dot[2].classList.remove('bg-yellow');

    sliderHeadline.innerText = database.slider.second.title;
    sliderDescription.innerText = database.slider.second.desc;
    bgImageHolder.style.backgroundImage = database.slider.second.imgUrl;
    
    currentSlide = 2;
}

function changeToSlide3(){
    clearInterval(timer);
    window.timer = setInterval(changeSlideAuto, 5000);
    
    dot[0].classList.remove('bg-yellow');
    dot[1].classList.remove('bg-yellow');
    dot[2].classList.add('bg-yellow');

    sliderHeadline.innerText = database.slider.third.title;
    sliderDescription.innerText = database.slider.third.desc;
    bgImageHolder.style.backgroundImage = database.slider.third.imgUrl;
    
    currentSlide = 3;
}

var timer = setInterval(changeSlideAuto, 5000);

function changeSlideAuto(){
    currentSlide += 1;
    
    if(currentSlide > 3){
        currentSlide = 1;
    }

    console.log(currentSlide);

    if(currentSlide == 1){
        changeToSlide1();
    }
    else if(currentSlide == 2){
        changeToSlide2();
    }
    else if(currentSlide == 3){
        changeToSlide3();
    }
}

/* Navbar mobile menu */
var navbarBtn = document.querySelector('.navbar-toggle');
var nabarMobile = document.getElementById('mobile-navbar');
var navbarIcon = document.querySelector('.fas');
var navbarMobileLinks = document.querySelectorAll('#mobile-navbar-list a');

var isOpenNavbar = false;

navbarBtn.addEventListener('click', openOrCloseNavbar);

function openOrCloseNavbar(){
    nabarMobile.classList.toggle('display-none');
    nabarMobile.classList.toggle('display-block');
    navbarIcon.classList.toggle('fa-times');
    navbarIcon.classList.toggle('fa-bars');
}

for(n of navbarMobileLinks){
    n.addEventListener('click', openOrCloseNavbar);
}