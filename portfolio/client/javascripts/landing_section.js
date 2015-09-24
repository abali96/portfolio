Template.landing_section.events({
  'click .enter-btn' : function() {
    $('html, body').animate({
        scrollTop: $('#robotics-wrapper').offset().top - $('#nav').height()
    }, 400);
  }
});