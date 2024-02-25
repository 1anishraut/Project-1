// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// ---------- DARK THEME-------
var mode =document.getElementById('moon');

mode.onclick = function(){
  document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
      mode.src= "./logos/sun-fill.svg";
      document.getElementById('main').style.backgroundColor = '#131313';
      document.getElementById('moon').style.filter ='invert()';
      
      var invert = document.querySelectorAll('.lens');
      invert.forEach(function(photo){
        photo.classList.add('filter');
      })
    } else{
      mode.src= "./logos/moon-fill.svg";
      document.getElementById('main').style.backgroundColor = 'transparent';
      document.getElementById('moon').style.filter ='none';

      var invert = document.querySelectorAll('.lens');
      invert.forEach(function(photo){
        photo.classList.remove('filter');
      })
    }
}


// -------MENU BUTTON-------
const menuButton = document.querySelector('#menu-button')
		const rootElement = document.documentElement

		menuButton.addEventListener('click', () => {
			rootElement.toggleAttribute('menu-open')
		})
      //   menuButton.addEventListener("mouseleave",() => {
			// rootElement.toggleAttribute('menu-open')
      //   })


    // ----------- GLASS SLIDER-------
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 
  var elem_container= document.querySelector(".elem-container")
  var fixed_image=document.querySelector(".fixed-image")
  elem_container.addEventListener("mouseenter",function(){
      fixed_image.style.display="block"
  })
  elem_container.addEventListener("mouseleave",function(){
      fixed_image.style.display="none"
  })
  
  var elem_1 = document.querySelectorAll(".elem")
  elem_1.forEach(function(image_hover){
      image_hover.addEventListener("mouseenter",function(){
          var image = image_hover.getAttribute("data-image")
       fixed_image.style.backgroundImage = `url(${image})`
      })
  })
