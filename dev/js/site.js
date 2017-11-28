var doc = document;

//show mobile nav {
doc.querySelector('.js-nav-toggle').addEventListener('click', function(event) {
  doc.querySelector('body').classList.toggle('no-scroll');
  doc.querySelector('.js-mobile-navigation').classList.toggle('is-open');
  doc.querySelector('.js-site-wrapper').classList.toggle('is-open');
});