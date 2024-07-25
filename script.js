gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function() {
  ScrollTrigger.create({
    trigger: ".wrapper",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wrapper", {
        x: `${-350 * self.progress}vw`,
        duration: 0.5,
        ease: "power3.out",
      });
    },
  });
});
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true,
    duration: 2
  }
})
.to('.img', {
  stagger: .2,
  y: -700,
  scrub: true,
  duration: 1, // Increased duration
  ease: 'power3.out',
})

const left = document.querySelector(".ri-arrow-left-wide-line");
const right = document.querySelector(".ri-arrow-right-wide-line");
const slider = document.querySelector(".slider");
const cards = document.querySelector(".cards");

let slideNumber = 1;
const length = cards.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${
    slideNumber*800}px)`;
    slideNumber++;
}
const prevSlide = () => {
  slider.style.transform = `translateX(-${
    (slideNumber-2)*800}px)`;
    slideNumber--;
}
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`
  slideNumber = 1;
}
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length-1)*800}px)`;
  slideNumber = length;
}
right.addEventListener('click', () => {
  slideNumber < length ? nextSlide() :
  getFirstSlide();
});
left.addEventListener('click', () => {
  slideNumber < length ? prevSlide() :
  getLastSlide();
});

gsap.to(".page4-content h1", {
  display: "none",
  duration: 0,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 10%",
    end: "bottom 30%",
    // markers:true,
    scrub: true,
    onEnter: () => {
      gsap.to(".page4-content h1", {
        display: "block",
        duration: 1,
      });
      gsap.fromTo(".page4-content h1", 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      );
    },
    onLeave: () => {
      gsap.to(".page4-content h1", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power3.out",
      });
      gsap.set(".page4-content h1", {
        display: "none",
        duration: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".page4-content h1", {
        display: "block",
        duration: 1,
      });
      gsap.fromTo(".page4-content h1", 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      );
    },
    onLeaveBack: () => {
      gsap.to(".page4-content h1", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power3.out",
      });
      gsap.set(".page4-content h1", {
        display: "none",
        duration: 0,
      });
    },
  },
});