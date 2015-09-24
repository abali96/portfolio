Template.webdev_gallery.events({
  "mouseover .image-wrapper" : function(event) {
    var target = $(event.target);
    target.siblings().removeClass('active-image');
    target.addClass('active-image');
    var display = target.parent().siblings('.display-image');
    var backgroundImage = target[0].style.backgroundImage;
    $(display).css({'background-image' : backgroundImage});
    target.parent().siblings('.caption').text(target.data('text'));
  },
});

Template.webdev_gallery.helpers({
  gallery_display_image : function() {
    return _.first(this.images).background_image;
  },
});
