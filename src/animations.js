import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { removeData } from 'jquery';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


// intro animation, mail elements including titles
const tl = gsap.timeline();

tl
  .to(".intro-a", {left: 0, duration: 1.75, delay: 1, ease: " sine.inOut"})
// title text animation
  .from(".title", {duration: 1, opacity: 0, scale: 0.3 },1.5)
  .to('.display-1', 2, { duration: 1,
    text: {
        value: `DIGITAL<span class="period">.</span>`,
        delimiter: ""
    }
  });

tl.from('.navbar', {opacity: 0, duration: 3});

// nav arrow animation 
const tlNavArrow = gsap.timeline();
tlNavArrow.repeat(-1).yoyo(true);

tlNavArrow
.to(".icon_arrow", {yPercent: 60, opacity: 0.2, duration: 1.5, ease: "circ.in"})


// section parallax effect

gsap.utils.toArray("section").forEach((section, i) => {
    section.bg = section.querySelector(".bg"); 
  
    // Give the backgrounds some random images
    // section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
  
    // Do the parallax effect on each section
    if (i) {
      section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;
  
      gsap.to(section.bg, {
        backgroundPosition: `50% ${-innerHeight / 2}px`,
        // x: 1100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true
        }
      });
    } 
    
    // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
    else {
      section.bg.style.backgroundPosition = "50% 0px"; 
  
      gsap.to(section.bg, {
        backgroundPosition: `50% ${-innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top", 
          end: "bottom top",
          scrub: true
        }
      });
    }

  });

// animate a section 

const tlASection = gsap.timeline({
  scrollTrigger: {
    trigger: ".a",
    start: "top center", 
    end: "center +=200",
    scrub: true
  }
});

tlASection
  .from('.a', {filter: "blur(13px)", duration: 4, ease: "circ.inOut"})
  .from(".section_a_title", {yPercent: 500, duration: 4, ease: "power4.out"})
  .to(".section_a_title", {yPercent: -100, duration: 3, opacity: 0}, "+=2")

  // animate b section elements

gsap.from(".digital-left",{
    y: -350,
    opacity: 0,
    scrollTrigger: {
        trigger: ".b",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        ease: "power2"
    }
})
const tlBRight = gsap.timeline({
  scrollTrigger: {
    trigger: ".b",
    start: "top 40%",
    // markers: true,
    end: "center +=175",
    scrub: true,
    ease: "power2"
  }
});

tlBRight
  .from(".marketingCard", {x: 600, yPercent: -150, opacity: 0, duration: 3, ease: "circ.in"})
  .from(".webCard", {x: 600, yPercent: -150, opacity: 0, duration: 5, ease: "circ.in"})
  .from(".designCard", {x: 600, yPercent: -150, opacity: 0, duration: 5, ease: " bounce.inOut"})
  .to(".designCard", {x: -130, rotationZ: -10, duration: 4, ease: " bounce.inOut"}) 
  .to(".designCard", {x: -130, rotationZ: -5, duration: 2, ease: " bounce.inOut"})
  .to(".designCard", {x: -120, rotationZ: -5, duration: 2, ease: " bounce.inOut"})
  .to(".designCard", {x: -50, rotationZ: -5, duration: 2, ease: " bounce.inOut"})
  .to(".designCard", {x: 0, rotationZ: 0, duration: 1, ease: " bounce.inOut"})
  .to(".icon_01", {color: "#34558B", duration: 5,})
  .to(".icon_02", {color: "#34558B", duration: 5, })
  .to(".icon_03", {color: "#34558B", duration: 5, })

//animate c section 
const tlCSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".c",
    start: "top center",
    end: "top +=50",
    scrub: true,
    ease: "power2"
  }
});

tlCSection
  .from(".proj_01_wrapper", {filter: "blur(5px)", opacity: 0.4, xPercent: 250, yPercent: -25, rotationZ: 360, duration: 3, ease: "circ.in"})
  .from(".proj_02_wrapper", {filter: "blur(8px)", opacity: 0.8, xPercent: 270, yPercent: -60, duration: 3, ease: "circ.in"})
  .from(".proj_03_wrapper", {filter: "blur(8px)", opacity: 0.8, xPercent: 250, yPercent: -85, duration: 3, ease: "circ.in"})
  .from(".proj_04_wrapper", {filter: "blur(8px)", opacity: 0.8, xPercent: 270, yPercent: -120, duration: 3, ease: "circ.in"})
  
  
  

