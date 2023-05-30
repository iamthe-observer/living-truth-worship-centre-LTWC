export interface SiteData {
  home: {
    announcements: string[]
    mission_statement: {
      title: string
      body: string[]
    }
    quick_nav_section: {
      title: string
      body: {
        head: string
        info: string
        link_text?: string
        link?: string
        func?: VoidFunction
      }[]
    }
    bible_verse: {
      quote: string
      loc: string
    }
  }
  about: {
    head_text: string[]
    mission_statement: {
      title: string
      body: {
        explanation: string[]
        notes: string[]
      }
    }
    beliefs: {
      title: string
      title_exp: string
      notes: {
        head: string
        body: string
      }[]
    }
    values: {
      title: string
      notes: string[]
    }
    bible_verse: {
      quote: string
      loc: string
    }
  }
  sundays: {
    title: string[]
    section1: {
      intro: string
      p1: string
      p2: string
      FAQ: {
        q: string
        a: string
      }[]
    }
    section2: {
      expect_head: string
      expectations: {
        title: string
        body: string
      }[]
    }
  }
  visit: {
    head_text: string[]
    details: {
      title: string
      info: {
        head: string
        body: string
      }[]
    }
    expectations: {
      title: string
      title_exp: string
      info: {
        head: string
        body: string
      }[]
    }
    welcome_msg: {
      title: string
      body: string[]
    }
  }
}

const allData: Partial<SiteData> = {
  home: {
    announcements: [
      "Join us for an uplifting and inspiring worship service this Sunday! Our charismatic church is passionate about experiencing the power of the Holy Spirit through praise and worship. Come and encounter the presence of God as we sing, dance, and pray together. Whether you're a long-time member or a first-time visitor, you'll be welcomed with open arms. Service starts at 10am, and we can't wait to see you there!",
      "Are you looking to grow deeper in your faith and connect with others who share your passion for Jesus? Our small group ministry is a great place to start! We have a variety of groups for all ages and stages of life, from Bible studies to prayer groups to fellowship gatherings. In these intimate settings, you'll have the opportunity to learn, grow, and build meaningful relationships with other believers. Check out our website for more information on how to get involved!",
    ],
    mission_statement: {
      body: [
        "We exist to bring people to a personal relationship with Jesus Christ and membership in His family; and to develop a Christ-like character; building and restoring them through spiritual and economic development to become mature Christians, equipped for ministry in the church, the community, and around the world, in order to declare God's",
        'glory.',
      ],
      title: 'Our Mission',
    },
    quick_nav_section: {
      title: 'Find Your Place at Living Truth Worship Centre',
      body: [
        {
          head: 'New to the Living Truth?',
          info: 'We believe that everyone at LTWC has the potential to find truth through Jesus and his teachings, and we are committed to creating a community where everyone can thrive.',
          link: '/aboutLTWC',
          link_text: 'Get Started',
        },
        {
          head: 'Connect With Us',
          info: 'Join our email list to get updates from Living Truth Worship Centre.',
          link_text: 'Sign Up',
          func: () =>
            document
              .getElementsByClassName('footer-container')[0]
              .scrollIntoView({ behavior: 'smooth', block: 'start' }),
        },
        {
          head: 'Join Us Online',
          info: 'We gather online each Sunday at 9:30am - 11:45:am GMT. Join Us This Sunday!',
          link_text: 'Watch us Live!',
        },
        {
          head: 'Serve and Protect His Home',
          info: 'Participate in all sort of activities that will contribute to the operations nad development of the chapel.',
          link_text: 'Get Started',
        },
        {
          head: 'Give',
          info: 'Your generosity will go a long way! God Bless you.',
        },
      ],
    },
    bible_verse: {
      quote:
        'But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.',
      loc: 'John 16:13',
    },
  },
  about: {
    head_text: ['WHAT WE BELIEVE IN', 'GET TO KNOW US BETTER!'],
    mission_statement: {
      title: 'Our Mission',
      body: {
        explanation: [
          'Our purpose is to help people who are distant from God to discover new life through the Truth which is Jesus Christ.',
          'That means:',
        ],
        notes: [
          'Glorify God: The church exists to give honor and praise to God in all that it does.',
          'Nurture a community of believers: Living Truth Worship Centre provides a supportive and welcoming community where believers can grow in their faith through worship, fellowship, and discipleship.',
          'Impact the local community: The church seeks to make a positive impact on its local community and beyond through outreach and evangelism efforts.',
          'Teach the truth of the Gospel: Living Truth Worship Centre is committed to teaching the truth of the Gospel in a relevant and impactful way that helps individuals understand and apply it in their daily lives.',
        ],
      },
    },
    beliefs: {
      title: 'Our Beliefs',
      title_exp:
        'Here at Living Truth Worship Centre, we hold these beliefs to be central to our faith and guiding principles.',
      notes: [
        {
          head: "Bible's Truth",
          body: 'The Bible is the inspired word of God and is the ultimate authority for all matters of faith and practice.',
        },
        {
          head: 'Jesus',
          body: 'Jesus Christ is the Son of God and the only way to salvation.',
        },
        {
          head: 'Faith',
          body: "Salvation is a free gift of God's grace, received through faith in Jesus Christ.",
        },
        {
          head: 'Holy Spirit',
          body: 'The Holy Spirit empowers believers to live a godly life and is present to guide and direct them.',
        },
        {
          head: 'Baptism',
          body: "Baptism by immersion is an important step of obedience for believers, signifying their identification with Christ's death, burial, and resurrection.",
        },
        {
          head: 'Communion',
          body: "Communion, or the Lord's Supper, is a symbolic remembrance of Christ's sacrifice for believers.",
        },
        {
          head: 'Church as a Body',
          body: 'The church is the body of Christ and is called to carry out His mission on earth.',
        },
        {
          head: 'His Return',
          body: 'The return of Jesus Christ is certain and will be visible, personal, and triumphant.',
        },
      ],
    },
    values: {
      title: 'Our Values',
      notes: [
        'Community: LTWC values creating a sense of belonging and support for all members and attendees.',
        'Love: LTWC values expressing love towards each other and the world as a whole.',
        'Integrity: LTWC values upholding honesty, trustworthiness, and moral principles.',
        'Compassion: LTWC values showing kindness and empathy towards others.',
        'Diversity: LTWC values embracing differences in culture, beliefs, and backgrounds.',
        'Excellence: LTWC values striving for excellence in all aspects of church life and service.',
        'Authenticity: LTWC values being true to oneself and genuine in all interactions.',
        'Service: LTWC values serving others and making a positive impact in the community.',
        'Humility: LTWC values being humble and recognizing the value of others.',
        'Inclusivity: LTWC values welcoming and accepting all individuals, regardless of their differences.',
      ],
    },
    bible_verse: {
      quote:
        'EVERYTHING FOR THE GLORY OF JESUS CHRIST “WHO CAME FROM THE FATHER, FULL OF GRACE AND TRUTH',
      loc: 'John 1:14',
    },
  },
  sundays: {
    title: ['Sundays At', 'Living Truth Ministries'],
    section1: {
      FAQ: [
        {
          q: 'When Do We Gather?',
          a: 'We gather on Sundays at 9:30 am! We are located at 4 Kings Cross Rd, Brampton, ON L6T 3X8, Canada.',
        },
        {
          q: 'Where Do I Park?',
          a: 'There is a spacious area to park right around the building. We will have Door Holders scattered throughout to help direct you where you need to go!',
        },
      ],
      intro:
        "Building a community founded on the truth of Christ's teachings,where love, faith, and service come together to make a positive impact on the world.",
      p1: "We foster a community rooted in the truth of Christ's teachings,where honesty, integrity, and accountability are upheld to make a positive impact on society.",
      p2: 'At Living Truth Worship Centre, we welcome people of all ages to join us for Sunday service. Read on to discover what to expect during our gatherings.',
    },
    section2: {
      expect_head: 'What To Expect At LTWC',
      expectations: [
        {
          title: 'GENERATION LEADERSHIP COLLEGE',
          body: 'Build your leadership skills and get hands-on experience in ministry. Through our partnership with Southeastern University, you can also work toward completing a degree.',
        },
        {
          title: 'BAPTISM',
          body: 'Have you accepted Jesus? Take the next step in your faith and get baptized. Click below for more details.',
        },
        {
          title: 'CARE AND SUPPORT GROUPS',
          body: 'LTWC offers a variety of supportive groups where you will find support and encouragement. Click below to learn more.',
        },
        {
          title: 'YOUNG ADULTS',
          body: "LTWC Young Adults is the perfect place to build lasting friendships, serve together, and study God's Word while making lifelong connections with other young adults.",
        },
        {
          title: 'KIDS',
          body: 'Kids are important to us at LTWC! Find out about our ministries for the little toddies (birth-preschool) and kids (kindergarten through 5th grade).',
        },
        {
          title: 'SUNDAY SERVICES',
          body: 'The large corporate gathering of our church community every Sunday. Our gathering is always centered on worshiping God, proclaiming God’s Word, and connecting with others.',
        },
      ],
    },
  },
  visit: {
    head_text: [
      'Visit Us',
      'Look for Us',
      'Worship With Us',
      'Find Our Location Here!',
    ],
    details: {
      title: 'Details',
      info: [{ head: 'Main Service Time', body: '9:15am • 11:30am' }],
    },
    expectations: {
      title: 'Experience worshipping the Lord in a fulfilling way',
      title_exp:
        'When you visit Living Truth Worship Centre, you can anticipate an enjoyable experience while connecting with God in a meaningful manner.',
      info: [
        {
          head: 'Pray for others',
          body: "Prayer is a powerful way to connect with God and to ask for his help for others. When you pray for others, you are showing God's love and compassion",
        },
        {
          head: 'Worship Services',
          body: "Participate in uplifting worship services where you can join others in praising and expressing gratitude to God. Engage in communal singing, prayers, and listening to sermons that focus on God's truth and love.",
        },
        {
          head: 'Prayer Gatherings',
          body: "Take part in prayer gatherings or prayer circles where individuals come together to seek God's guidance, share their burdens, and intercede for one another. This experience promotes a sense of community and deepens your connection with God and others.",
        },
        {
          head: 'Community Outreach',
          body: "Engage in community outreach programs organized by the church, such as feeding the homeless, supporting local charities, or visiting the sick and elderly. These activities allow you to express God's love through acts of kindness and service.",
        },
        {
          head: 'Retreats and Conferences',
          body: "Participate in church retreats or conferences where you can take a break from the busyness of everyday life and focus on deepening your faith. These events often feature speakers, workshops, and activities that explore God's truth and love in a more immersive and transformative way.",
        },
        {
          head: 'Passion',
          body: "We show our passion, so feel free to join us. We're just so excited about what Jesus has done in our lives. We can't keep quiet about it!",
        },
        {
          head: "Celebrating life's milestones",
          body: "Church is a great place to celebrate life's milestones, such as baptisms, weddings, and funerals. These events are a time to come together as a community to rejoice and mourn with each other.",
        },
        {
          head: 'Fellowship Events',
          body: 'Attend fellowship events and social gatherings organized by the church, such as potlucks, picnics, or game nights. These activities provide an opportunity to build relationships with other believers, fostering a sense of belonging and support.',
        },
      ],
    },
    welcome_msg: {
      title: "Welcome To The Lord's Abode",
      body: [
        'Come as you are and discover why people love Living Truth Worship Centre.',
        "No matter your background, your current situation, or how close or far from God you feel, we're excited to help you feel welcome the moment you step through our doors.",
        'Come, meet God, and experience Him work in your life so that it will never be the same.',
      ],
    },
  },
}

export default allData
