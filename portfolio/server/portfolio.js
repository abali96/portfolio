Meteor.startup(function() {
  Projects.remove({});
  Categories.remove({});
  Organizations.remove({});
  Categories.insert({name: "robotics-wrapper", projects: [Meteor.mechatronics.jeeves, Meteor.mechatronics.matrix, Meteor.mechatronics.breathaliver, Meteor.mechatronics.adelaide, Meteor.mechatronics.frame_me]});
  Categories.insert({name: "webdev-wrapper", projects: [Meteor.webdev.replay, Meteor.webdev.freeloader]});
  Organizations.insert(Meteor.organizations.voltera);
  Organizations.insert(Meteor.organizations.bitmaker);
  Organizations.insert(Meteor.organizations.deca);
  Organizations.insert(Meteor.organizations.glowstik);
  Organizations.insert(Meteor.organizations.mytf);
  Organizations.insert(Meteor.organizations.top_scholar);
  Organizations.insert(Meteor.organizations.ccs);
  Organizations.insert(Meteor.organizations.phasma);

});