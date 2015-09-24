Meteor.webdev = {
  replay : {name: "replay",
              title: "Replay, Social Event Archive",
              background_image: 'background-image: url("projects/replay/background.png")',
              invert: "line-follow",
              flip: "flip",
              right_offset: "right: -2vw;",
              next_text: "Next  &#8595;",
              tabs: [{type: "tech", name: "Summary", active_tab: "active-tab"}, {type: "stack", name: "Tech Stack"}],
              content_boxes: [
                                {css_class: '', type: "tech", paragraphs: ["<p>Replay leverages Twitter API data so that events can be 'replayed' with the original audience reactions. Currently, it supports three distinct code-crafted experiences: a curated digest, a live minute-by-minute timeline, and tweets by social influencers and friends. Replay excels at tracking sporting events, concert festivals, and television shows, where you can see exactly what happened at what moment and how the world felt with fine precision. Quality content is curated through a simple upvote/downvote system. It's better than PVR, and a hell of a lot cooler than missing out.</p><p>Replay was originally piloted at Bitmaker Labs, a code bootcamp in downtown Toronto. It was a project I completed shortly after completing their nine-week, immersive web development bootcamp.</p><p>Check out the code on <a href='http://github.com/abali96/Replay/''><span class='link'>Github</span></a>.</p>"]},
                                {css_class: '', type: "stack",
                                  tech_lists: [
                                    {
                                      css_class: 'tech-list',
                                      name: "Back End",
                                      list_elements: ["Ruby on Rails 4", "Cron jobs to run system checks and data-crunching", "Custom rake tasks for tweet filtering algorithms", "DelayedJob to queue dynamic changing of Twitter API stream parameters", "Multithreading", "Geocoder and timezone manipulation"]
                                    },
                                    {
                                      css_class: 'tech-list',
                                      name: "Core Algorithms",
                                      list_elements: ["Work-around to Twitter API rate limiting and dynamically starting stream based on event time", "Makeshift 'concurrent API calls' to stream simultaneous events' parameters when only establishing one connection, while also detecting which event a tweet belongs to (conditional probability)", "Tweet activity peak detection to auto-segment events into important moments of high social traffic"]
                                    },
                                    {
                                      css_class: 'tech-list',
                                      name: "Core Algorithms",
                                      list_elements: ["SASS preprocessor", "CSS3 transitions", "A dash of Bourbon & Neat", "jQuery and jQuery-UI", "Proprietary image filtering"]
                                    },
                                  ],
                                },
                              ],
                webdev_gallery: {
                    invert: "line-follow",
                    default_text: "Welcome to Replay.",
                    images : [
                      {image_classes: "image-wrapper active-image", background_image:"background-image: url('/projects/replay/replay.png')", caption:"Welcome to Replay."},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/replay/homepage.jpeg')", caption:"After logging in, Replay dives straight into its event archives - recent events tracked by other users."},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/replay/edgefest.png')", caption:"Edgefest, the summer concert series, has this auto-generated and styled landing page with auto-generated timeslots based on peaks in tweet activity during the event."},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/replay/tweets.png')", caption:"Replay starts tracking before the doors open and ensures that event 'VIP's tweets are tracked seperately to guarantee quality content. Here, VIPs are the bands, organizers, and trusted media."},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/replay/pictures.png')", caption:"The most popular pictures from Said The Whale's set are featured paired with an upvote/downvote button for the community to curate relevant content."},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/replay/timeline.png')", caption:"Minute-by-minute scrollable timeline where you can witness audience reactions as if they were live. You can see exactly what happened at what moment in quasi 'real time', just like the tweet says!"},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/replay/gallery.png')", caption:"Gallery mode to get a quick snapshot of the event."},
                    ]
                }
            },
  freeloader : {name: "freeloader",
              title: "Freeloader, Free Food Finder",
              background_image: 'background-image: url("projects/freeloader/background.png")',
              right_offset: "right: -0.3vw",
              tabs: [{type: "tech", name: "Summary", active_tab: "active-tab"}, {type: "stack", name: "Tech Stack"}],
              next_text: "Next  &#8595;",
              content_boxes: [
                                {css_class: '', type: "tech", paragraphs: ["<p>Waterloo (UW) Freeloader uses data from Facebook events at the University of Waterloo to help locate free food on campus, sending you an SMS notification with directions to your next meal. In addition to text notifications, there is a simple web interface that allows you access the same information. Food postings are also supplemented by student input. Notifications occur 15 minutes before the event starts, giving you enough time to walk all the way across campus.</p> <p>A feature that allows users to SMS information back to the server about the quantity of food remaining is currently being built. Application of this technology to other verticals is also underway.</p> <p>As expected, inspiration for UW Freeloader came from my poor student budget and a demonstrated demand from my classmates.</p> <p>Check out the code on <a href='http://github.com/abali96/uw_freeloader/'><span class='link'>Github</span></a>.</p>"]},
                                {css_class: '', type: "stack",
                                  tech_lists: [
                                    {
                                      css_class: 'tech-list',
                                      name: "Back-End",
                                      list_elements: ["Ruby on Rails 4", "Custom rake tasks to refresh data from Facebook API (Koala gem)", "DelayedJob to queue Twilio API streams", "Google Maps for directions"]},
                                    {
                                      css_class: 'tech-list',
                                      name: "Core Algorithm",
                                      list_elements: ["Natural language processing/string parsing in conjunction with conditional probability to determine if event serves free food"]
                                    },
                                    {
                                      css_class: 'tech-list',
                                      name: "Core Algorithms",
                                      list_elements: ["SASS preprocessor", "CSS3 transitions"]
                                    },
                                  ],
                                },
                              ],
                webdev_gallery: {
                    default_text: "The Waterloo Freeloader web interface. Each card displays the upcoming events on campus with free food, what kind of food will be served, and directions are just one click away.",
                    images : [
                      {image_classes: "image-wrapper active-image", background_image:"background-image: url('/projects/freeloader/homepage.png')", caption:"The Waterloo Freeloader web interface. Each card displays the upcoming events on campus with free food, what kind of food will be served, and directions are just one click away."},
                      {image_classes: "image-wrapper", background_image:"background-image: url('/projects/freeloader/android.png')", caption:"A sample SMS notification a user would receive. Again, directions are one tap away."},
                    ]
                }
            },
};