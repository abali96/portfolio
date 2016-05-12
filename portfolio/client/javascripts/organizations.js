Template.organizations.helpers({
  organizations : function() {

    return Organizations.find({}, {sort: {key: 1}});
  }
});