var doc = document;

//show mobile nav {
doc.querySelector('.js-nav-toggle').addEventListener('click', function(event) {
  doc.querySelector('body').classList.toggle('no-scroll');
  doc.querySelector('.js-mobile-navigation').classList.toggle('is-open');
  doc.querySelector('.js-site-wrapper').classList.toggle('is-open');
  doc.querySelector('.js-header').classList.toggle('is-open');
});

// grab an element
var headerElement = document.querySelector(".js-header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(headerElement);
// initialise
headroom.init({
  tolerance : {
    up : 15,
    down : 60
  }
});