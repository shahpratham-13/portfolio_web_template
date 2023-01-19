/*》》》》》》》》》》》》》》》
  PreLoader Js code start
》》》》》》》》》》》》》》》*/
const preLoader = () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
};

/*》》》》》》》》》》》》》》》
  Menu Slider Js code start
》》》》》》》》》》》》》》》*/
const menuIcon = document.querySelector('.menuIcon');
const closeMenu = document.querySelector('.closeMenu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.remove('toogle');
  navbar.style.opacity = '1';
});

closeMenu.addEventListener('click', () => {
  navbar.classList.add('toogle');
  navbar.style.opacity = '0';
});

/*》》》》》》》》》》》》》》》
  scroll effect Js code start
》》》》》》》》》》》》》》》*/
const navbarList = document.querySelector('.navbarList');
const navbarChild = navbarList.children;
const aboutLink = document.querySelector('.aboutLinkSec');
const about = document.querySelector('#aboutMe');
Array.from(navbarChild).forEach((elem) => {
  elem.addEventListener('click', () => {
    navbar.classList.add('toogle');
    navbar.style.opacity = '0';
  });
});
aboutLink.addEventListener('click', () => {
  about.scrollIntoView({ behavior: "smooth" });
});
/*》》》》》》》》》》》》》》》
  Animate Number Js code start
》》》》》》》》》》》》》》》*/
const counterSection = document.querySelector('.counterSection');
const animate = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting == false) {
    return;
  }
  const counterHead = document.querySelectorAll('.counterHeading');
  const speed = 100;
  counterHead.forEach((elem) => {
    const updateNum = () => {
      const targetNum = parseInt(elem.dataset.number);
      const initialNum = parseInt(elem.innerText);
      const incrementNum = Math.floor(targetNum / speed);
      if (initialNum < targetNum) {
        elem.innerText = `${initialNum+incrementNum}+`;
        setTimeout(updateNum, 10)
      }
    }
    updateNum();
  });
}, {
  root: null,
  threshold: 0
})
animate.observe(counterSection);

/*》》》》》》》》》》》》》》》
  Scroll to Top Js code start
》》》》》》》》》》》》》》》*/
const scrollToTop = document.querySelector('.scrollTop');
const heroSec = document.querySelector('.heroSection');
const contactUs = document.querySelector('.contactSection');
scrollToTop.addEventListener('click', () => {
  heroSec.scrollIntoView({ behavior: "smooth" });
  scrollToTop.style.transform = 'translateY(10rem)';
  scrollToTop.style.opacity = '0';
});
const scrollHome = new IntersectionObserver((entry, observer) => {
  const [newEntry] = entry;
  if (newEntry.isIntersecting == false) {
    return;
  } else {
    scrollToTop.style.transform = 'translateY(0)';
    scrollToTop.style.opacity = '1';
  }
},
{
  root: null,
  threshold: 0
});
scrollHome.observe(contactUs);

/*》》》》》》》》》》》》》》》
Testimonial automate Js code start
》》》》》》》》》》》》》》》*/

const indicator = document.querySelectorAll('.indicator');
const testimonialCard = document.querySelector('.testimonialSec');
setInterval(()=>{
  setTimeout(() => {
    indicator[0].style.background = '#3cb4fc';
    indicator[1].style.background = '#DCDCDC';
    indicator[2].style.background = '#DCDCDC';
    indicator[3].style.background = '#DCDCDC';
    testimonialCard.style.transform = 'translateX(0vw)';
  },2000);
  setTimeout(()=>{
    indicator[1].style.background = '#3cb4fc';
    indicator[0].style.background = '#DCDCDC';
    indicator[2].style.background = '#DCDCDC';
    indicator[3].style.background = '#DCDCDC';
    testimonialCard.style.transform = 'translateX(-100vw)';
  },4000);
  setTimeout(() => {
    indicator[2].style.background = '#3cb4fc';
    indicator[0].style.background = '#DCDCDC';
    indicator[1].style.background = '#DCDCDC';
    indicator[3].style.background = '#DCDCDC';
    testimonialCard.style.transform = 'translateX(-200vw)';
  },6000);
  setTimeout(() => {
    indicator[3].style.background = ' #3cb4fc';
    indicator[0].style.background = ' #DCDCDC';
    indicator[1].style.background = ' #DCDCDC';
    indicator[2].style.background = ' #DCDCDC';
    testimonialCard.style.transform = 'translateX(-300vw)';
  },8000);
  },2000);
indicator[0].onclick = function(){
  indicator[0].style.background = ' #3cb4fc';
  for(var i = 1;i<indicator.length;i++){
    indicator[i].style.background='#DCDCDC';
    testimonialCard.style.transform = 'translateX(0vw)';
  }
}
indicator[1].onclick = function(){
  indicator[1].style.background = ' #3cb4fc';
  for(var i = 0;i<indicator.length;i++){
    if(i!=1){
    indicator[i].style.background='#DCDCDC';
    testimonialCard.style.transform = 'translateX(-100vw)';
    }
  }
}
indicator[2].onclick = function() {
  indicator[2].style.background = ' #3cb4fc';
  for (var i = 0; i < indicator.length; i++) {
    if (i != 2) {
      indicator[i].style.background = '#DCDCDC';
      testimonialCard.style.transform = 'translateX(-200vw)';
    }
  }
}
indicator[3].onclick = function() {
  indicator[3].style.background = ' #3cb4fc';
  for (var i = 0; i < indicator.length; i++) {
    if (i != 3) {
      indicator[i].style.background = '#DCDCDC';
      testimonialCard.style.transform = 'translateX(-300vw)';
    }
  }
}
/*》》》》》》》》》》》》》》》
  scroll to contact section start
》》》》》》》》》》》》》》》*/
const contactLink = document.querySelector('.contactLink');
contactLink.addEventListener('click',()=>{
  contactUs.scrollIntoView({
    behavior: "smooth"
  });
});
const hireMeBtn = document.querySelector('.hireMeButton');
hireMeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contactUs.scrollIntoView({
    behavior: "smooth"
  });
});