Template.description.events({
  "click .tabs .tab" : function(event) {
    var target = $(event.target);
    var type = this.type;
    target.parent().siblings('.content').hide();
    target.parent().siblings("[data-type='" + type + "']").eq(0).show();
    target.removeClass('inactive-tab, active-tab');
    target.siblings('.tab').removeClass('active-tab');
    target.addClass('active-tab');
  },
  "mouseover .image-wrapper" : function(event) {
    var target = $(event.target);
    target.addClass('active-image');
    target.siblings().removeClass('active-image');
    target.addClass('active-image');
    var display = target.parent().siblings('.display-image');
    var backgroundImage = target[0].style.backgroundImage;
    $(display).css({'background-image' : backgroundImage});
    target.parent().siblings('.caption').text(target.data('text'));
  },
  'click .next' : function(event) {
    var scrollto;
    var target = $(event.target);
    if (target.parent().parent().index() == target.parent().parent().siblings().length) {
      if (target.parent().parent().parent().next().length === 0) {
        scrollto = target.parent().parent().parent().next();
      } else {
        scrollto = target.parent().parent().parent().next();
      }
    } else {
      if (target.parent().parent().parent().next().length === 0) {
        scrollto = target.parent().parent().next().next().find('.background');
      } else {
       scrollto = target.parent().parent().nextAll("section").not(".mobile-gallery");
      }
    }
    $('html, body').animate({
        scrollTop: $(scrollto).offset().top - $('#nav').height()
    }, 400);
  }
});