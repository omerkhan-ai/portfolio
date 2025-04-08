gsap.from(".navbar", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
  
  gsap.from(".hero-content h2", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
  });
  
  gsap.from(".hero-content p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
    ease: "power3.out"
  });
  
  gsap.from(".cta-button", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 1.1,
    ease: "back.out(1.7)"
  });
  