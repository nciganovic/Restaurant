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
    },
    aboutUs:{
        intro:{
            pText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam minus aliquid, itaque illum assumenda repellendus dolorem, dolore numquam totam saepe, porro delectus, libero enim odio quo. Explicabo ex sapiente sit eligendi, facere voluptatum! Quia vero rerum sunt porro architecto corrupti eaque corporis eum, enim soluta, perferendis dignissimos, repellendus, beatae laboriosam."
        },
        list:{
            obj1:"1",
            obj2:"2",
            obj3:"3",
            obj4:"4",
            obj5:"5",
        },
        outro:{
            pText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque similique molestias est quod reprehenderit, quibusdam nam qui, quam magnam."
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

/* About us */
var aboutUsP = document.querySelectorAll('.mu-about-us-right p');
var aboutUsUl = document.querySelector('.mu-about-us-right ul');

aboutUsP[0].innerText = database.aboutUs.intro.pText;
aboutUsP[1].innerText = database.aboutUs.outro.pText;


var obj = database.aboutUs.list;

for(var i in obj){
    var li = document.createElement('li');
    li.innerText = i;
    aboutUsUl.appendChild(li);
}

var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
	{
        setInterval(increaseItem1, 10);
        setInterval(increaseItem2, 10);
        setInterval(increaseItem3, 10);
        setInterval(increaseItem4, 1);
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#mu-counter"));

/* Item couner */
var item1 =  document.getElementsByClassName('counter-value')[0];
var item2 =  document.getElementsByClassName('counter-value')[1];
var item3 =  document.getElementsByClassName('counter-value')[2];
var item4 =  document.getElementsByClassName('counter-value')[3];

var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;

function increaseItem1(){
    if(t1 < 125){
        t1++;
    }
    item1.innerText = t1;
}

function increaseItem2(){
    if(t2 < 245){
        t2++;
    }
    item2.innerText = t2;
}

function increaseItem3(){
    if(t3 < 86){
        t3++;
    }
    item3.innerText = t3;
}

function increaseItem4(){
    if(t4 < 578){
        t4 += 1;
    }
    item4.innerText = t4;
}