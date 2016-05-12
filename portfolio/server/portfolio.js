Meteor.startup(function() {
  Projects.remove({});
  Categories.remove({});
  Organizations.remove({});
  Categories.insert({name: "robotics-wrapper", projects: [Meteor.mechatronics.jeeves, Meteor.mechatronics.matrix, Meteor.mechatronics.breathaliver, Meteor.mechatronics.adelaide, Meteor.mechatronics.frame_me]});
  Categories.insert({name: "webdev-wrapper", projects: [Meteor.webdev.replay, Meteor.webdev.freeloader]});
  Meteor.organizations.icspi["key"] = 1;
  Meteor.organizations.voltera["key"] = 2;
  Meteor.organizations.bitmaker["key"] = 3;
  Meteor.organizations.deca["key"] = 4;
  Meteor.organizations.glowstik["key"] = 5;
  Meteor.organizations.top_scholar["key"] = 6;
  Meteor.organizations.ccs["key"] = 7;
  Meteor.organizations.phasma["key"] = 8;

  Organizations.insert(Meteor.organizations.icspi);
  Organizations.insert(Meteor.organizations.voltera);
  Organizations.insert(Meteor.organizations.bitmaker);
  Organizations.insert(Meteor.organizations.deca);
  Organizations.insert(Meteor.organizations.glowstik);
  // Organizations.insert(Meteor.organizations.mytf);
  Organizations.insert(Meteor.organizations.top_scholar);
  Organizations.insert(Meteor.organizations.ccs);
  Organizations.insert(Meteor.organizations.phasma);
});