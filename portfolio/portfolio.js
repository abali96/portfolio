if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    categories : function() {
      return Categories.find();
    },
  });

  Template.body.onRendered(function(){
    $('#nav').hide();
    $('.content').hide();
    $('[data-type="tech"]').show();
  });

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



  Template.content_box.helpers({
    isTech : function() {
      return this.type == 'tech';
    },
    isGallery : function() {
      return this.type == 'gallery';
    }
  });

  Template.description.events({
    "click .tabs .tab" : function(event) {
      var target = $(event.target);
      var type = this.type;
      target.parent().siblings('.content').hide();
      target.parent().siblings("[data-type='" + type + "']").eq(0).show();
      target.removeClass('inactive-tab, active-tab');
      target.siblings('.tab').removeClass('active-tab');
      target.addClass('active-tab');
    },
    "mouseover .image-wrapper" : function() {
      var target = $(event.target);
      target.siblings().removeClass('active-image');
      target.addClass('active-image');
      var display = target.parent().siblings('.display-image');
      var backgroundImage = target[0].style.backgroundImage;
      $(display).css({'background-image' : backgroundImage});
      target.parent().siblings('.caption').text(target.data('text'));
    },
  });
}

if (Meteor.isServer) {
  Projects.remove({});
  Categories.remove({});
  var jeeves = {name: "jeeves",
                title: "Jeeves, the Robo-Butler",
                subtitle: "Self-Balancing Two-Wheel Arduino Robot",
                background_image: 'background-image: url("/projects/jeeves/jeeves.jpg")',
                tabs:[{type: "tech", name: "Tech Stack", classes: "tab active-tab"}, {type: "gallery", name: "Gallery", classes: "tab"}, {type: "video", name: "Video", classes: "tab"}],
                content_boxes: [
                                      {css_class: '', type: "tech", paragraphs: ['<p>Jeeves is a "mini Segway" that features a PID control loop with basic external disturbance rejection and the ability to respond to directional commands over serial. All electro-mechanical design was done in-house using SolidWorks and the chassis was machined myself using the mill, drill press, brake press, and hand tools on campus.</p><p>Featured in the <a href="http://iwarrior.uwaterloo.ca/2015/01/28/30267/waterloo-engineerings-hidden-gems/#hide"><span class="link">The Iron Warrior</span></a>, the Waterloo Engineering newspaper. Check out the code on <a href="http://github.com/abali96/ButlerRobot/"><span class="link">Github</span></a>.</p>'],
                                        tech_lists: [
                                          {
                                            css_class: 'electrical',
                                            name: "Electrical Components",
                                            list_elements: ["Arduino Uno", "MPU6050 6Dof IMU", "Geared DC motors", "Adafruit motorshield", "12V LiPo battery"],
                                          },
                                          {
                                            css_class: 'electrical',
                                            name: "Key Software Learning",
                                            list_elements: ["C++/Arduino IDE", "Preprocessor commands", "FIFO buffers", "PID control loop + tuning", "Serial/I2C comms."],
                                          },
                                        ],
                                      },
                                      {css_class: 'gall', type: "gallery", background_image: 'background-image: url("/projects/jeeves/jeeves.jpg")', images: ["background-image: url('/projects/jeeves/butler_standing.jpg')", "background-image: url('/projects/jeeves/chassis.png')", "background-image: url('/projects/jeeves/imu.jpg')", "background-image: url('/projects/jeeves/jeeves_underneath.jpg')", "background-image: url('/projects/jeeves/on_carpet.jpg')"]},
                                      {css_class: 'video-wrapper', type: "video", video: "<iframe class='video' width='100%' height='92%' src='//www.youtube.com/embed/7g7U8gHD9v4' frameborder='0' allowfullscreen></iframe>"}]
              };
  Categories.insert({name: "robotics-wrapper", projects: [jeeves]});
}

