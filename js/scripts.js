$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".navbar").addClass("sticky");
    else $(".navbar").removeClass("sticky");
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
  
  // JS type Library
  var typed = new Typed(".auto-type", {
    strings: ["Developer", "Creator", "Designer"],
    typeSpeed: 125,
    backSpeed: 200,
    loop: true,
  });

  // Scroll Reveal Library
  ScrollReveal().reveal("#about, #contact", {
    delay: 100,
    duration: 1000,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    origin: "bottom",
    distance: "50px",
    threshhold: 0.5
  });

});
