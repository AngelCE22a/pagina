jQuery(document).ready(function() {

// Smooth scrolling
jQuery('a[href*=\\#]:not([href=\\#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = jQuery(this.hash);
    target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      jQuery('html,body').animate({
        scrollTop: target.offset().top - 150
      }, 1000);
      return false;
    }
  }
});

// Manage nav bar classes in order to reduce size of it, when scroll and once loaded
function isScrolled() {
  var scrollTop = $(document).scrollTop();
  if(scrollTop > 0) jQuery('nav.fh5co-nav').addClass('small');
  else jQuery('nav.fh5co-nav').removeClass('small');
}
jQuery(window).scroll(function() { isScrolled() });
isScrolled();

}); // END jQuery(document).ready()
