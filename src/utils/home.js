// Home Animation
function home() {
  document.addEventListener('DOMContentLoaded', function() {
    const titleText = document.querySelector('.title-text');
    setTimeout(function() {
      titleText.classList.add('show');
    }, 100);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const titleText = document.querySelector('.home-description');
    setTimeout(function() {
      titleText.classList.add('show');
    }, 100);
  });
}

export default home;