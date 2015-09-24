Template.content_box.helpers({
  isTech : function() {
    return this.type == 'tech';
  },
  isGallery : function() {
    return this.type == 'gallery';
  },
  gallery_display_image : function() {
    return _.first(this.images);
  }
});