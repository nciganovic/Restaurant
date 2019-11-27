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
    },
    ourMenu:{
        Breakfast:{
            1:{
                src:"assets/img/menu/slika1.jpg",
                title:"breakfast 1 title",
                price:"$153.59",
                desc: "Description of breakfast 1"
            },
            2:{
                src:"assets/img/menu/slika1.jpg",
                title:"breakfast 2 title",
                price:"$15.59",
                desc: "Description of breakfast 2"
            },
            3:{
                src:"assets/img/menu/slika1.jpg",
                title:"breakfast 3 title",
                price:"$125.59",
                desc: "Description of breakfast 3"
            },
            4:{
                src:"assets/img/menu/slika1.jpg",
                title:"breakfast 4 title",
                price:"$5.59",
                desc: "Description of breakfast 4"
            },
            5:{
                src:"assets/img/menu/slika1.jpg",
                title:"breakfast 5 title",
                price:"$1.59",
                desc: "Description of breakfast 5"
            },
            6:{
                src:"assets/img/menu/slika1.jpg",
                title:"breakfast 6 title",
                price:"$1545.59",
                desc: "Description of breakfast 6"
            }
        },
        Meals:{
            1:{
                src:"slika1.jpg",
                title:"Meal title 1",
                price:"$99.59",
                desc: "Description of Meal"
            },
            2:{
                src:"slika1.jpg",
                title:"Meal title 2",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            3:{
                src:"slika1.jpg",
                title:"Meal title 3",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            4:{
                src:"slika1.jpg",
                title:"Meal title 4",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            5:{
                src:"slika1.jpg",
                title:"Meal title 5",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            6:{
                src:"slika1.jpg",
                title:"Meal title 6",
                price:"$15.59",
                desc: "Description of breakfast"
            }
        },
        Snacks:{
            1:{
                src:"slika1.jpg",
                title:"Snack 1",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            2:{
                src:"slika1.jpg",
                title:"Snack 2",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            3:{
                src:"slika1.jpg",
                title:"Snack 3",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            4:{
                src:"slika1.jpg",
                title:"Snack 4",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            5:{
                src:"slika1.jpg",
                title:"Snack 5",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            6:{
                src:"slika1.jpg",
                title:"Snack 6",
                price:"$15.59",
                desc: "Description of breakfast"
            }
        },
        Desserts:{
            1:{
                src:"slika1.jpg",
                title:"Desserts 1",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            2:{
                src:"slika1.jpg",
                title:"Desserts 2",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            3:{
                src:"slika1.jpg",
                title:"Desserts 3",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            4:{
                src:"slika1.jpg",
                title:"Desserts 4",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            5:{
                src:"slika1.jpg",
                title:"Desserts 5",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            6:{
                src:"slika1.jpg",
                title:"Desserts 6",
                price:"$15.59",
                desc: "Description of breakfast"
            }
        },
        Drinks:{
            1:{
                src:"slika1.jpg",
                title:"Drink 1",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            2:{
                src:"slika1.jpg",
                title:"Drink 2",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            3:{
                src:"slika1.jpg",
                title:"Drink 3",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            4:{
                src:"slika1.jpg",
                title:"Drink 4",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            5:{
                src:"slika1.jpg",
                title:"Drink 5",
                price:"$15.59",
                desc: "Description of breakfast"
            },
            6:{
                src:"slika1.jpg",
                title:"Drink 6",
                price:"$15.59",
                desc: "Description of breakfast"
            }
        }
    },
    reservation:{
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quidem autem iusto, perspiciatis, amet, quaerat blanditiis ducimus eius recusandae nisi aut totam alias consectetur et",
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

/* Our menu */
var menuListHolder = document.getElementsByClassName('mu-menu-item-nav');
var menuHolder = document.querySelector('.mu-restaurant-menu');

var allMeals = database.ourMenu;
var data = database.ourMenu.Breakfast;


for(m in allMeals){
    var newLiTag = document.createElement('li');
    var aTag = document.createElement('a');

    aTag.innerText = m;
    aTag.setAttribute('href', ' ');

    if(m == 'Breakfast'){
        newLiTag.setAttribute('class', 'active');
    }

    menuHolder.appendChild(newLiTag);
    newLiTag.appendChild(aTag);

}

for(i in data){
    var liTag = `<li>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="${data[i].src}" alt="img-110x110">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">${data[i].title}</a></h4>
                            <span class="mu-menu-price">${data[i].price}</span>
                            <p>${data[i].desc}</p>
                        </div>
                    </div>
                </li>`; 

    if(Number(i) % 2 == 0){
        console.log(data[i].src);
        menuListHolder[0].innerHTML += liTag;
    }
    else{
        menuListHolder[1].innerHTML += liTag;
    }
}

var allMenuHolderTags = document.querySelectorAll('.mu-restaurant-menu li');

allMenuHolderTags[0].addEventListener('click', setBreakfast);
allMenuHolderTags[1].addEventListener('click', setMeals);
allMenuHolderTags[2].addEventListener('click', setSnacks);
allMenuHolderTags[3].addEventListener('click', setDesserts);
allMenuHolderTags[4].addEventListener('click', setDrinks);

var menuListHolderImage = document.querySelectorAll('.media-object');
var menuListHolderTitle = document.querySelectorAll('.media-heading a');
var menuListHolderPrice = document.querySelectorAll('.mu-menu-price');
var menuListHolderDesc = document.querySelectorAll('.media-body p');

function setData(x, y){
    var currentData = x;
    var i = 0;
    for(cd in currentData){
        menuListHolderImage[i].src = currentData[cd].src;
        menuListHolderTitle[i].innerText = currentData[cd].title;
        menuListHolderPrice[i].innerText = currentData[cd].price;
        menuListHolderDesc[i].innerText = currentData[cd].desc;
        i++; 
    }
    for(al of allMenuHolderTags){
        if(y == al){
            al.classList.add('active');
        }
        else{
            al.classList.remove('active');
        }
    }
}

function setBreakfast(event){
    event.preventDefault();
    setData(database.ourMenu.Breakfast, this);
}
function setMeals(){
    event.preventDefault();
    setData(database.ourMenu.Meals, this);
}
function setSnacks(){
    event.preventDefault();
    setData(database.ourMenu.Snacks, this);
}
function setDesserts(){
    event.preventDefault();
    setData(database.ourMenu.Desserts, this);
}
function setDrinks(){
    event.preventDefault();
    setData(database.ourMenu.Drinks, this);
}

/* Reservation */
var reservationDesc = document.querySelector('.mu-reservation-content p');
var formRes = document.querySelector('.mu-reservation-form');
var formResErrors = document.getElementById('formResErrors');

var isFullNameValid = false;
var isEmailValid = false;
var isNumberValid = false;
var isSelectValid = false;
var isDateValid = false;

for(let i = 0; i < 10; i++){
    var optionTag = document.createElement('option');
    optionTag.setAttribute('value', i);
    if(i == 0){
        optionTag.innerText = 'How many persons?';
    }
    else if (i == 1){
        optionTag.innerText = '1 Person';
    }
    else{
        optionTag.innerText = i + ' Persons';
    }
    formRes.howManyRes.appendChild(optionTag);
}

formRes.btnRes.addEventListener('click', submitReservetionFrom);

function submitReservetionFrom(){

    var firstNameRgx = /^[A-z]{1,15}(\s[A-z]{1,15})?$/;
    isFullNameValid = firstNameRgx.test(formRes.fullNameRes.value);
    console.log(formRes.fullNameRes.value);
    console.log(isFullNameValid);

    var emailRgx = /^[a-z]{1}[a-z0-9\.\_\-]{1,30}@[a-z\.]{3,10}\.[a-z]{2,3}$/;
    isEmailValid = emailRgx.test(formRes.emailRes.value);
    console.log(formRes.emailRes.value);
    console.log(isEmailValid);

    var numberRgx = /^[0-9]{7,9}$/; 
    isNumberValid = numberRgx.test(formRes.numberRes.value);
    console.log(formRes.numberRes.value);
    console.log(isNumberValid);

    if(formRes.howManyRes.selectedIndex != 0){
        isSelectValid = true;
    }
    else{
        isSelectValid = false;
    }

    var dateRgx = /^([1-9]|0[1-9]|[1-2][0-9]|3[0-1])-([1-9]|0[1-9]|1[0-2])-2019$/;
    isDateValid = dateRgx.test(formRes.datepicker.value);
    console.log(formRes.datepicker.value);
    console.log(isDateValid);

    if(isFullNameValid && isEmailValid && isNumberValid && isSelectValid && isDateValid){
        formResErrors.innerHTML = "";
        alert('Your reservation has been sent!');
        formRes.fullNameRes.value = "";
        formRes.emailRes.value = "";
        formRes.numberRes.value = "";
        formRes.howManyRes.selectedIndex = 0;
        formRes.datepicker.value = "";
        formRes.messageRes.value = "";
    }
    else{
        formResErrors.innerHTML = "";
        var ulTag = document.createElement('ul'); 
        if(!isFullNameValid){
            ulTag.innerHTML += '<li>Full name is invalid</li>';
        }
        if(!isEmailValid){
            ulTag.innerHTML += '<li>Email is invalid</li>';
        }
        if(!isNumberValid){
            ulTag.innerHTML += '<li>Phone number is invalid</li>';
        }
        if(!isSelectValid){
            ulTag.innerHTML += '<li>Select is invalid</li>';
        }
        if(!isDateValid){
            ulTag.innerHTML += '<li>Date is invalid</li>';
        }
        formResErrors.appendChild(ulTag);
    }
    

}

reservationDesc.innerText = database.reservation.desc;