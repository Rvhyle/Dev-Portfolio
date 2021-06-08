/**
 * Disable animations for bigger screens
 * Viewport size bigger than 1980 will be a static site
 */
if ($(window).width() < 1980) {
  let controller = new ScrollMagic.Controller();

  // Hero Section
  let tweenHero1 = gsap.from('#hero-info', {
    opacity: 0,
    x: -200,
    duration: 2,
  });

  let tweenHero2 = gsap.from('#svg-img', {
    opacity: 0,
    x: 200,
    duration: 2,
  });

  //Scene 1: About Me
  let aboutMe_scene = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: '#about-me',
  })
    .setTween(
      gsap.from('#about-trigger', {
        opacity: 0,
        y: -300,
      })
    )
    .addTo(controller);

  //Scene 2: Skills
  let timeline = new TimelineMax();
  let htmlTween = gsap.from('#html', { opacity: 0, y: -50 });
  let cssTween = gsap.from('#css', { opacity: 0, y: -50 });
  let jsTween = gsap.from('#js', { opacity: 0, y: -50 });
  let jQueryTween = gsap.from('#jquery', { opacity: 0, y: -50 });
  let reactTween = gsap.from('#react', { opacity: 0, y: -50 });
  let gitTween = gsap.from('#git', { opacity: 0, y: -50 });
  let githubTween = gsap.from('#github', { opacity: 0, y: -50 });

  timeline
    .add(htmlTween)
    .add(cssTween)
    .add(jsTween)
    .add(jQueryTween)
    .add(reactTween)
    .add(gitTween)
    .add(githubTween);

  let skills_scene = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: '#skills',
  })
    .setTween(timeline)
    .addTo(controller);

  //Scene 3: Projects
  let timeline2 = new TimelineMax();
  let project1Tween = gsap.from('#project-1', { opacity: 0, x: -100, y: -100 });
  let project2Tween = gsap.from('#project-2', { opacity: 0, x: -100, y: -100 });
  let project3Tween = gsap.from('#project-3', { opacity: 0, x: -100, y: -100 });

  timeline2.add(project1Tween).add(project2Tween).add(project3Tween);

  let projects_scene = new ScrollMagic.Scene({
    duration: 400,
    triggerElement: '#projects',
  })
    .setTween(timeline2)
    .addTo(controller);
}
