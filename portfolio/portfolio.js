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
    },
    gallery_display_image : function() {
      return _.first(this.images);
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
                tabs:[{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}, {type: "video", name: "Video"}],
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
                                      name: "Software",
                                      list_elements: ["C++/Arduino IDE", "Preprocessor commands", "FIFO buffers", "PID control loop + tuning", "Serial/I2C comms."],
                                    },
                                    ],
                                  },
                                  {css_class: 'gall', type: "gallery", background_image: 'background-image: url("/projects/jeeves/jeeves.jpg")', images: ["background-image: url('/projects/jeeves/butler_standing.jpg')", "background-image: url('/projects/jeeves/chassis.png')", "background-image: url('/projects/jeeves/jeeves_underneath.jpg')", "background-image: url('/projects/jeeves/on_carpet.jpg')"]},
                                  {css_class: 'video-wrapper', type: "video", video: "<iframe class='video' width='100%' height='92%' src='//www.youtube.com/embed/7g7U8gHD9v4' frameborder='0' allowfullscreen></iframe>"}]
              };
  var adelaide = {name: "adelaide",
                  title: "Adelaide, the Line Follower",
                  subtitle: "Hydrogen Fuel Cell-Powered Robot",
                  background_image: 'background-image: url("/projects/adelaide/background.jpg")',
                  invert: "line-follow",
                  tabs:[{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}],
                  content_boxes: [
                      {css_class: '', type: "tech", paragraphs: ["<p>Adelaide explores the intersection of autonomous robotics and environmental sustainability. Two hydrogen fuel cells are located on-board the car chassis, used to power all circuitry including the drivetrain. Adelaide's success was determined by its ability to navigate an arbitrary course marked by a black line on a white surface, making intelligent decisions at forks and dead-ends. Efficient power management algorithms were written to optimize run time at 19 minutes.</p>"],
                      tech_lists: [
                          {
                            css_class: 'electrical',
                            name: "Electrical Components",
                            list_elements: ["TI MSP430 microcontroller", "Brushed DC motors", "Pololu 6V motor driver", "Two hydrogen fuel cells", "Light and touch sensors"],
                          },
                          {
                            css_class: 'software',
                            name: "Software",
                            list_elements: ["C++", "IAR embedded workbench", "Fuzzy logic", "Light sensor calibration", "Efficient power use"],
                          },
                        ]},
                        {css_class: 'gall', type: "gallery", background_image: 'background-image: url("projects/adelaide/car.jpg")', images: ['background-image: url("projects/adelaide/computer.jpg")', 'background-image: url("projects/adelaide/track.jpg")', 'background-image: url("projects/adelaide/robot.jpeg")', 'background-image: url("projects/adelaide/me.jpg")']}
                  ]
                };
    var frame_me = {name: "frameMe",
                title: "FrameMe, Living Photo Frame",
                subtitle: "500px Pictures That Compliment Your Day",
                background_image: 'background-image: url("projects/frame_me/background.jpg")',
                tabs: [{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}],
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ['<p>FrameMe is a living photo frame that dynamically curates and displays 500px (social media) photos based on the current time of day and weather. FrameMe provides an endless stream of pictures, cycling every minute and renewing its collection every hour. Current features being built include motion detection for efficient power management and natural language processing for verbal commands. </p> <p>Check out the <a href="https://medium.com/@abali96/building-a-digital-photo-frame-with-500px-raspberry-pi-and-ruby-f3639fd294ce"><span class="link">build blog</span></a> for full implementation details and source code.</p>'],
                                    tech_lists: [
                                    {
                                      css_class: 'electrical',
                                      name: "Electrical Components",
                                      list_elements:["Raspberry Pi Model B", "Faytech 12.1 IP65 Touch LCD", "USB Wifi Module", "PIR Motion Sensor"],
                                    },
                                    {
                                      css_class: 'electrical',
                                      name: "Software",
                                      list_elements: ["Raspbian OS", "*NIX environment configuration", "Ruby scripting", "500px API integration"],
                                    },
                                    ],
                                  },
                                  {css_class: 'gall', type: "gallery", images: ['background-image: url("projects/frame_me/me.jpg")', 'background-image: url("projects/frame_me/side.jpg")']},
                                ]
                    };
    var breathaliver = {name: "breathaliver",
                title: "BreathAliver, IOT breathalyzer",
                subtitle: "Wearable, Uber-Connected Breathalyzer",
                background_image: 'background-image: url("/projects/breathaliver/breathaliver_cropped.jpg");',
                invert: "line-follow",
                tabs: [{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}],
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ['<p>BreathAliver is wearable breathalyzer that detects your blood alcohol concentration as you approach your car, and automatically calls an Uber cab to your location (or texts a friend!) if you’ve had too much to drink. It uses NFC to determine when the user approaches their car, acting as a pre-emptive solution to drunk driving.</p><p>To minimize cost, BreathAliver collects temperature and pressure data about the user\'s breath, correlating these metrics to relative levels of blood alcohol concentration.</p><p>This project placed 1st at <a href="https://wearhackstoronto.splashthat.com/"<span class="link">Wearhacks Toronto 2015</span></a>, and was featured at the <a href="http://www.wearewearables.com/july-2015-toronto/"><span class="link">Toronto July WeAreWearables conference</span></a> at these Discovery District.'],
                                    tech_lists: [
                                    {
                                      css_class: 'electrical',
                                      name: "Electrical Components",
                                      list_elements:["Intel Edison", "Xadow Wearables Kit", "NFC tag", "Barometer"],
                                    },
                                    {
                                      css_class: 'electrical',
                                      name: "Software",
                                      list_elements: ["C++, Python, Ruby", "Uber API", "Twilio API", "Sensor calibration"],
                                    },
                                    ],
                                  },
                                  {css_class: 'gall', type: "gallery", images: ['background-image: url("/projects/breathaliver/breathaliver_vertical.jpg")', 'background-image: url("/projects/breathaliver/breathaliver_justin.jpg")', 'background-image: url("/projects/breathaliver/wearewearables_conference.jpg")']},
                                ],
                    };
    var matrix = {name: "matrix_assistant",
                title: "Mate, the Desktop Assistant",
                subtitle: "Internet-connected LED Matrix Display",
                background_image: 'background-image: url("/projects/mate/background.jpg");',
                invert: "line-follow",
                tabs: [{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}, {type: "video", name: "Video"}],
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ["<p>Mate is a desktop assistant that displays live stock market, time, and weather data on a homemade 12X5 LED Matrix display.</p> <p>All display logic (including multiplexing, character mapping, and scrolling text) was designed and written in-house. A custom web API I designed serves a Particle Photon the necessary data via webhooks, which is then relayed to an Arduino Mega which handles the display.<p>All of this is tied together using a custom PCB I designed in Eagle CAD. See the code and PCB <a href='https://github.com/JustJLim/matrix-weather-clock'><span class='link'>here</span></a>.</p>"],
                                    tech_lists: [
                                    {
                                      css_class: 'electrical',
                                      name: "Electrical Components",
                                      list_elements:["Custom PCB (Eagle CAD)", "Arduino Mega", "Particle Photon", "4017 Decade Counter"],
                                    },
                                    {
                                      css_class: 'electrical',
                                      name: "Software",
                                      list_elements: ["Arduino C, Particle C", "Python backend (Bottle, Heroku)", "Yahoo Finance", "ForecastIO"],
                                    },
                                    ],
                                  },
                                  {css_class: 'gall', type: "gallery", images: ['background-image: url("/projects/mate/layout.png")', 'background-image: url("/projects/mate/schematic.png")', 'background-image: url("/projects/mate/pcb.jpg")', 'background-image: url("/projects/mate/prototype.jpg")']},
                                  {css_class: 'video-wrapper', type: "video", video_text: "<p>We see the time, the current weather (rain) and Apple's current share price.</p>", video: '<iframe width="100%" height="80%" src="https://www.youtube.com/embed/FiXA4B3V5pA" frameborder="0" allowfullscreen></iframe>'},
                                ],
                    };
  Categories.insert({name: "robotics-wrapper", projects: [jeeves, matrix, breathaliver, frame_me, adelaide]});
}

