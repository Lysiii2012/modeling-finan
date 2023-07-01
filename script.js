/********coki */
if (localStorage.getItem("agreementHidden")) {
  document.querySelector(".agreement-container").style.display = "none";
}
document.querySelector(".agreement-button").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".agreement-container").style.display = "none";
  localStorage.setItem("agreementHidden", true);
});



document.addEventListener('DOMContentLoaded', function() {
  var navIcons = document.querySelectorAll('.mobile');
  
  function toggleClass() {
    this.classList.toggle('show');
  }
  
  for (var i = 0; i < navIcons.length; i++) {
    navIcons[i].addEventListener('click', toggleClass);
  }
});


let headerNav = document.querySelector('.header-nav');
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

function handleScroll() {
  var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition && currentScrollPosition > 100) {
    headerNav.classList.add('scrolled-down');
  } else {
    headerNav.classList.remove('scrolled-down');
  }

  previousScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', handleScroll);

