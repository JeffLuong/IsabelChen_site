var $hamburger = $("#hamburger-button"),
    $root      = $('html, body'),
    $logo      = $("#logo-button");


function animateHamburger() {
  $hamburger.toggleClass('open');
  $logo.toggleClass('open');
};

function slideMenu() {
  $("#menu-wrapper").toggleClass('open');
  setTimeout(function(){
    $("#menu-wrapper").toggleClass('height');
  }, 350);
};

$hamburger.on('click', function(){
  slideMenu();
  animateHamburger();
});


$('#about').click(function() {
    $root.animate({
        scrollTop: $(".about-cont").offset().top
    }, 750);
    slideMenu();
    animateHamburger();
    return false;
});

$('#portfolio').click(function() {
    $root.animate({
        scrollTop: $(".portfolio-cont").offset().top
    }, 750);
    slideMenu();
    animateHamburger();
    return false;
});

$('#contact').click(function() {
    $root.animate({
        scrollTop: $(".contact-cont").offset().top
    }, 750);
    slideMenu();
    animateHamburger();
    return false;
});

$('#scroll-top i').click(function() {
    $root.animate({
        scrollTop: $(".app-cont").offset().top
    }, 750);
    return false;
});
