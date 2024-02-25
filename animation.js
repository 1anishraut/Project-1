function smooth(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
document.querySelectorAll('#work').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target =document.querySelector(this.getAttribute('href'));
    
  });
});


const tl = gsap.timeline();
tl
.to(".loading",{
  width: "0%",
  duration: 2,
  ease: Power4.easeInOut,
})
tl.to("#pre-loader",{
  height:0,
  duration:1,
  ease: Expo.easeInOut,
})

   // ------- NAV ------------
   .from("nav img, #nav-2",{
    scale:0,
    opacity: 0,
    stagger: 0.3,
    duration:-3,
    // delay: 0.4
  })
  .from("#left",{
  x: -5,
  opacity: 0,
  // delay: -1.5
  })
  .from("#right h1, #rignt img",{
  x: 100,
  opacity: 0,
  stagger: .3,
  // delay: 0.6
  })
  .from("video",{
  y: 100,
  opacity: 0,
  stagger: .3,
  // delay: 0.6
  })
  
  
  
  // --------PROJECT SECTION-----
  const project = new SplitType('#project-heading')
  gsap.to("#project-heading .char",{
    y:0,
    stagger:.05,
    delay: .5,
    duration: .1,
    scrollTrigger:{
      trigger:".project-section",
      scroller:"#main",
      start: "top 90%",
      toggleActions: "restart    none    none        none",
      //          onEnter     onLeave   enterBack   leaveBack
      //          play pause resume reverse restart reset complet none
      //                      
      // markers: true
    }
  })
  gsap.from(".elem",{
    y: 100,
    opacity: 0,
    stagger: 0.3,
    delay: 0.4,
    scrollTrigger:{
      trigger:".project-section",
      scroller:"#main",
      start: "top 90%",
      toggleActions: "restart none none none",
    }
  })

  // --------- PROGRESS SECTION -----------
  const project2 = new SplitType('#progress-heading')
  gsap.from("#progress-heading .char",{
    y:300,
    delay:.6,
    opacity:0,
    stagger:{ amount:0.5},
    scrollTrigger:{
      trigger:"#progress-item",
      scroller:"#main",
      start: "top bottom",
      end: "top 20%",
      start: "top 90%",
      toggleActions: "restart    none    none        none",
      // markers:true,
    }
  })
  
  gsap.from(".trapezoid",{
    x:-500,
    ease: "power4.out",
    // stagger:.3, 
    scrollTrigger:{
      trigger:"#progress-heading",
      scroller:"#main",
      scrub: true,
      start: "top bottom",
      end: "top 20%",
      start: "top 90%",
      toggleActions: "restart    none    none        none",
      // markers:true,
    }
  })
  gsap.from("#progress-box",{
    x:800,
    ease: "power4.out",
    // stagger:.3,
    scrollTrigger:{
      trigger:"#progress-heading",
      scroller:"#main",
      scrub: 1,
      start: "top bottom",
      end: "top 20%",
      start: "top 90%",
      toggleActions: "restart    none    none        none",
      // markers:true,
    }
  })

  gsap.from("#skill-percent",{
    width:'0%',
    ease: Sine.easeInOut,
    duration: 1,
    stagger:.3,
    scrollTrigger:{
      trigger:"#progress-heading",
      scroller:"#main",
      start: "top 40%",
      toggleActions: "restart    none    none        none",
    }
  })

  


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
smooth()





