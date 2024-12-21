window.addEventListener("DOMContentLoaded", (event) => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 1600 } },
      color: { value: "#FFD700" }, 
      shape: {
        type: "star", 
        stroke: { width: 1, color: "#FFD700" }, 
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false },
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: true, speed: 6, size_min: 0.5, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#FFD700",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
      },
    },
    retina_detect: true,
  });
});