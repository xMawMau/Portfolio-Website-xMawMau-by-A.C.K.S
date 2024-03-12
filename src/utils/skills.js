// Skilss Animation
function skills() {
  document.addEventListener("DOMContentLoaded", function() {
    let icons = document.querySelectorAll(".icon");

    function showIcons() {
      icons.forEach(function(icon) {
        icon.classList.add("show");
      });
    }

    function throttle(callback, delay) {
      let last = 0;
      return function() {
        let now = new Date().getTime();
        if (now - last < delay) {
          return;
        }
        last = now;
        callback.apply(null, arguments);
      };
    }

    function handleScroll() {
      let skillsSection = document.getElementById("skills");
      let skillsPosition = skillsSection.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (skillsPosition < screenHeight * 0.95) {
        showIcons();
        window.removeEventListener("scroll", scrollHandler);
      }
    }

    let scrollHandler = throttle(handleScroll, 200);
    window.addEventListener("scroll", scrollHandler);
  });
}

export default skills;