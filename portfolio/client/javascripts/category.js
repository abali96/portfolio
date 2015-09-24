Template.category.helpers({
  projects : function() {
    return this.projects;
  },
  tabs : function() {
    return this.tabs;
  },
  content_boxes : function() {
    return this.content_boxes;
  },
});

Template.category.onRendered(function() {
  $('.content').hide();
  $('[data-type="tech"]').show();
  $.each($('.small-images'), function() {
    $(this).children().eq(0).addClass('active-image');
  });
});
