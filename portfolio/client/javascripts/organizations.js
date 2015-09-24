Template.organizations.helpers({
  organizations : function() {
    return Organizations.find({}, {sort: {date_created: -1}});
  }
});