/**
 *  Navigation
 * 1. Add Active Class to Nav Content
 * 2. Turn off Vertical Overflow for html
 * 3. Handle Redirects with the nav links
 * 4. Turn Vertical Overflow for html on auto
 * 5. Remove Active Class from .navbar__content
 */

$().ready(function () {
  // Select Nav Button
  $('#nav-menu').click(function () {
    //Select Nav Content
    $('.navbar__content').css('display', 'block');
    $('*').css('overflow-y', 'hidden');
  });

  $('#close,.navbar__link').click(function () {
    //Select Nav Content
    $('.navbar__content').css('display', 'none');
    $('html').css('overflow-y', 'scroll');
  });

  // Nav Menu on Scroll
  let isScrolling;
  $(window).scroll(function () {
    let y_value = window.scrollY;
    // console.log(y_value); //For Scroll Magic Purposes
    // Put a background color on Nav Bar
    window.clearTimeout(isScrolling);
    $('.navbar__container').css('background-color', 'transparent');

    isScrolling = setTimeout(() => {
      y_value === 0
        ? $('.navbar__container').css('background-color', 'transparent')
        : $('.navbar__container').css('background-color', '	rgb(121, 173, 241)');
    }, 450);
  });
});
