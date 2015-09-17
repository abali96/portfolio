if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    projects : function() {
      return Projects.find();
    }
    
  });

  Template.project.helpers({

  });

  Template.project.events({
  });
}

if (Meteor.isServer) {
  Projects.remove({});
  Projects.insert({name: "Here", style: 'background-image: url("http://i.imgur.com/KmUOyTz.jpg")'});
  Projects.insert({name: "There"});
}

