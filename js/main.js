(function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar-list');
    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('is-active')
        navbar.classList.toggle('is-active')
    });
})();