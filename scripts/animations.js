$().ready(function () {
  // Plugins
  gsap.registerPlugin('ScrollTrigger');

  // Hero Section
  let tweenHeader = gsap.from('.header-content', {
    opacity: 0,
    scale: 0,
    duration: 2,
  });

  // About
  let timelineAbout = gsap.timeline();
  let aboutTween1 = gsap.to('body', { backgroundColor: '#000000' });
  let aboutTween2 = gsap.from('.about-me', {
    opacity: 0,
    y: -400,
    duration: 1,
  });

  timelineAbout.add(aboutTween1).add(aboutTween2);

  ScrollTrigger.create({
    animation: timelineAbout,
    trigger: '.header-container',
    start: 'bottom center',
    endTrigger: '.about',
    end: 'bottom 80%',
    toggleActions: 'play reverse play reverse',
  });

  // Skills
  let timelineSkills = gsap.timeline();
  let skillsTween1 = gsap.from('#skills-title', {
    opacity: 0,
    // x: 500,
  });
  let skillsTween2 = gsap.from('.devcon', {
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  });

  timelineSkills.add(skillsTween1).add(skillsTween2);

  ScrollTrigger.create({
    animation: timelineSkills,
    trigger: '.skills-container',
    start: 'top 30%',
    endTrigger: '.skills-container',
    end: 'center 30%',
    toggleActions: 'play reverse play reverse',
  });
});
