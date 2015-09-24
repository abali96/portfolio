Template.body.helpers({
  categories : function() {
    return Categories.find();
  },
});

Template.body.onRendered(function(){
  $('#nav').hide();
  GAnalytics.pageview('/');
});
