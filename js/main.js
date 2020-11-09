/*MENU SHOW*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*ACTIVE AND REMOVE MENU*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*Menu active - section*/
const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting && entry.intersectionRatio >= 0) {
			document.querySelector('.active').classList.remove('active');
			var id = entry.target.getAttribute('id');
			var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});



/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    duration: 2000,
    reset: false
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
/*SCROLL ABOUT*/
sr.reveal('.about__courses',{}); 
/*SCROLL SKILLS*/
sr.reveal('.skills', {});
sr.reveal('.skills__data',{interval: 200}); 
/*SCROLL WORK*/
sr.reveal('.work', {});
/*SCROLL CONTACT*/
sr.reveal('.contact', {});








