Meteor.publish("organizations", function() {
  return Organizations.find();
});

Meteor.publish("categories", function() {
  return Categories.find();
});