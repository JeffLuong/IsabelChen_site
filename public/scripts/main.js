var $hamburger = $("#hamburger-button"),
    $root      = $('html, body'),
    $logo      = $("#logo-button");

function animateHamburger() {
  $hamburger.toggleClass('open');
  $logo.toggleClass('open');
}

function slideMenu() {
  $("#menu-wrapper").toggleClass('open');
  setTimeout(function(){
    $("#menu-wrapper").toggleClass('height');
  }, 350);
}

function runAnimations() {
  slideMenu();
  animateHamburger();
}

$hamburger.on('click', function(){
  runAnimations();
});

$('#about').click(function() {
  $root.animate({
      scrollTop: $(".about-cont").offset().top
  }, 750);
  runAnimations();
  return false;
});

$('#portfolio').click(function() {
  $root.animate({
      scrollTop: $(".portfolio-cont").offset().top
  }, 750);
  runAnimations();
  return false;
});

$('#contact').click(function() {
  $root.animate({
      scrollTop: $(".contact-cont").offset().top
  }, 750);
  runAnimations();
  return false;
});

$('#scroll-top i').click(function() {
  $root.animate({
      scrollTop: $(".app-cont").offset().top
  }, 750);
  return false;
});

// IFRAME CONTROLS
function toggleVideo(state) {
  var div    = document.getElementById("video"),
      iframe = div.getElementsByTagName("iframe")[0].contentWindow;

      func = state == 'hide' ? 'pauseVideo' : 'playVideo';
      iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

var year = new Date().getFullYear();
var span = document.createElement('span');
span.innerText = `© ${year} ISABEL QZ CHEN. ALL RIGHTS RESERVED`;
document.querySelector('.contact-cont').appendChild(span);