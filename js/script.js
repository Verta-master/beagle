// mobile menu
var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__btn");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
  }
});

// scroll to top
$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });
  $(".scroll-up").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});