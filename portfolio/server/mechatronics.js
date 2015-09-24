Meteor.mechatronics = {
  jeeves : {name: "jeeves",
                title: "Jeeves, the Robo-Butler",
                subtitle: "Self-Balancing Two-Wheel Arduino Robot",
                background_image: 'background-image: url("/projects/jeeves/jeeves.jpg")',
                right_offset: "right: -0.3vw",
                tabs:[{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}, {type: "video", name: "Video"}],
                next_text: "Next  &#8595;",
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ['<p>Jeeves is a "mini Segway" that features a PID control loop with basic external disturbance rejection and the ability to respond to directional commands over serial. All electro-mechanical design was done in-house using SolidWorks and the chassis was personally machinedb using the mill, drill press, brake press, and hand tools on campus.</p><p>Featured in the <a href="http://iwarrior.uwaterloo.ca/2015/01/28/30267/waterloo-engineerings-hidden-gems/#hide"><span class="link">The Iron Warrior</span></a>, the Waterloo Engineering newspaper. Check out the code on <a href="http://github.com/abali96/ButlerRobot/"><span class="link">Github</span></a>.</p>'],
                                    tech_lists: [
                                    {
                                      css_class: 'electrical',
                                      name: "Electrical Components",
                                      list_elements: ["Arduino Uno", "MPU6050 6Dof IMU", "Geared DC motors", "Adafruit motorshield", "12V LiPo battery"],
                                    },
                                    {
                                      css_class: 'electrical',
                                      name: "Software",
                                      list_elements: ["C++/Arduino IDE", "PID control loop + tuning", "Disturbance rejection", "Kalman filters", "Serial/I2C comms."],
                                    },
                                    ],
                                  },
                                  {css_class: 'gall', type: "gallery", background_image: 'background-image: url("/projects/jeeves/jeeves.jpg")', images: ["background-image: url('/projects/jeeves/butler_standing.jpg')", "background-image: url('/projects/jeeves/chassis.png')", "background-image: url('/projects/jeeves/jeeves_underneath.jpg')", "background-image: url('/projects/jeeves/on_carpet.jpg')"]},
                                  {css_class: 'video-wrapper', type: "video", video: "<iframe class='video' width='100%' height='92%' src='//www.youtube.com/embed/7g7U8gHD9v4' frameborder='0' allowfullscreen></iframe>"}]
              },
  adelaide : {name: "adelaide",
                  title: "Adelaide, the Line Follower",
                  subtitle: "Hydrogen Fuel Cell-Powered Robot",
                  background_image: 'background-image: url("/projects/adelaide/background.jpg")',
                  right_offset: "right: -2vw;",
                  sub_right_offset: "right: -0.8vw",
                  invert: "line-follow",
                  flip: "flip",
                  next_text: "Next  &#8595;",
                  tabs:[{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}],
                  content_boxes: [
                      {css_class: '', type: "tech", paragraphs: ["<p>Adelaide explores the intersection of autonomous robotics and environmental sustainability. Two hydrogen fuel cells are located on-board and used to power all circuitry including the drivetrain. Adelaide's success was determined by its ability to navigate an arbitrary course marked by a black line on a white surface, making intelligent decisions at forks and dead-ends. Efficient power management algorithms were written to optimize run time at 19 minutes.</p>"],
                      tech_lists: [
                          {
                            css_class: 'electrical',
                            name: "Electrical Components",
                            list_elements: ["TI MSP430 microcontroller", "Brushed DC motors", "Pololu 6V motor driver", "Hydrogen fuel cells", "Light and touch sensors"],
                          },
                          {
                            css_class: 'software',
                            name: "Software",
                            list_elements: ["C++", "IAR embedded workbench", "Fuzzy logic", "Light sensor calibration", "Efficient power use algorithms"],
                          },
                        ]},
                        {css_class: 'gall', type: "gallery", background_image: 'background-image: url("projects/adelaide/car.jpg")', images: ['background-image: url("projects/adelaide/computer.jpg")', 'background-image: url("projects/adelaide/track.jpg")', 'background-image: url("projects/adelaide/robot.jpeg")', 'background-image: url("projects/adelaide/me.jpg")']}
                  ]
                },
    frame_me : {name: "frameMe",
                title: "FrameMe, Living Photo Frame",
                subtitle: "500px Pictures That Compliment Your Day",
                right_offset: "right: -0.3vw",
                background_image: 'background-image: url("/projects/frame_me/background.jpg")',
                tabs: [{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}],
                next_text: "To Web  &#8595;",
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ['<p>FrameMe is a living photo frame that curates and displays 500px photos based on the current time of day and weather. FrameMe cycles images every minute and renews its collection every hour. Current features being built include motion detection for efficient power management and natural language processing for verbal commands. </p> <p>Check out the <a href="https://medium.com/@abali96/building-a-digital-photo-frame-with-500px-raspberry-pi-and-ruby-f3639fd294ce"><span class="link">build blog</span></a> for full implementation details and source code.</p>'],
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
                    },
    breathaliver : {name: "breathaliver",
                title: "BreathAliver, IOT breathalyzer",
                subtitle: "Wearable, Uber-Connected Breathalyzer",
                background_image: 'background-image: url("projects/breathaliver/breathaliver_cropped.jpg")',
                right_offset: "right: -0.3vw",
                tabs: [{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}, {type: 'video', name: "Video"}],
                next_text: "Next  &#8595;",
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ['<p>BreathAliver is wearable breathalyzer that detects your sobriety as you approach your vehicle, and automatically sends an Uber cab or friend to your location.</p><p>To minimize cost, BreathAliver uses indirect metrics such as breath temperature and pressure, correlating this data to determine relative blood alcohol concentration.</p><p>This project placed 1st at <a href="https://wearhackstoronto.splashthat.com/"<span class="link">Wearhacks Toronto 2015</span></a>, and was featured at the <a href="http://www.wearewearables.com/july-2015-toronto/"><span class="link">WeAreWearables tech conference</span></a> - the largest of its kind in Canada.'],
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
                                  {css_class: 'video-wrapper', type: "video", video: '<iframe width="100%" height="94%" src="https://www.youtube.com/embed/C0wPDZJ44tE??start=36" frameborder="0" allowfullscreen></iframe>'},
                                ],
                    },
    matrix : {name: "mate",
                title: "Mate, the Desktop Assistant",
                subtitle: "Internet-connected LED Matrix Display",
                right_offset: "right: -2vw;",
                sub_right_offset: "right: -0.8vw;",
                background_image: 'background-image: url("/projects/mate/background.jpg");',
                invert: "line-follow",
                flip: "flip",
                next_text: "Next  &#8595;",
                tabs: [{type: "tech", name: "Tech Stack", active_tab: "active-tab"}, {type: "gallery", name: "Gallery"}, {type: "video", name: "Video"}],
                content_boxes: [
                                  {css_class: '', type: "tech", paragraphs: ["<p>Mate is a desktop assistant that displays live stock market, time, and weather data on a homemade 12x5 LED Matrix display.</p> <p>All display logic (including multiplexing, character mapping, and scrolling text) was architected and written in-house. A custom web API I designed serves a Particle Photon the necessary data via webhooks, which is then relayed to an Arduino Mega which handles the display.<p>All of this is tied together using a custom PCB I designed in Eagle CAD. See the code and PCB <a href='https://github.com/JustJLim/matrix-weather-clock'><span class='link'>here</span></a>.</p>"],
                                    tech_lists: [
                                    {
                                      css_class: 'electrical',
                                      name: "Electrical Components",
                                      list_elements:["Custom PCB (Eagle CAD)", "Arduino Mega", "Particle Photon", "Decade Counter"],
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
                    },
};