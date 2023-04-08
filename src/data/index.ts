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
        'glory',
      ],
      title: 'Our Mission',
    },
    quick_nav_section: {
      title: 'Find Your Place at Living Truth Worship Centre',
      body: [
        {
          head: 'I ❤ Jesus',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet illum asperiores ullam sunt sed tempora optio laudantium quae sapiente?',
        },
        {
          head: 'I ❤ God',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet illum asperiores ullam sunt sed tempora optio laudantium quae sapiente?',
        },
        {
          head: 'I ❤ Holy Spirit',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet illum asperiores ullam sunt sed tempora optio laudantium quae sapiente?',
        },
        {
          head: 'I ❤ Jesus',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet illum asperiores ullam sunt sed tempora optio laudantium quae sapiente?',
        },
        {
          head: 'I ❤ God',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet illum asperiores ullam sunt sed tempora optio laudantium quae sapiente?',
        },
        {
          head: 'I ❤ Holy Spirit',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet illum asperiores ullam sunt sed tempora optio laudantium quae sapiente?',
        },
      ],
    },
    bible_verse: {
      quote:
        'But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.',
      loc: 'John 16:134',
    },
  },
  about: {
    head_text: ['WHAT WE BELIEVE IN', 'GET TO KNOW US BETTER!'],
    mission_statement: {
      title: 'Our Mission',
      body: {
        explanation: [
          'Our purpose is to help people who are distant from God to discover new life through Jesus Christ.',
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
          a: 'We gather on Sundays at 9:30 am! We are located at 210 Trilith Parkway.',
        },
        {
          q: 'Is There A Place For My Kids?',
          a: 'bloom + Passion Kids are the rooms of our House designed for your kids! bloom (6 Weeks – Pre-K) and Passion Kids (K-5th) both meet in the Roam building on the second floor (210 Trilith Pkwy Suite 100, Fayetteville, GA 30214). We have the best Door Holders that will help your family check-in and take great care of your kids while you attend the gathering. Check-in opens as early as 8:45 am, and you can plan to pick up your child after the gathering ends. Passion Students (6th-8th) will meet in the Shipyard (125 Shepperton Way, Fayetteville, GA 30214).',
        },
        {
          q: 'When Do We Gather?',
          a: 'We gather on Sundays at 9:30 am! We are located at 210 Trilith Parkway.',
        },
        {
          q: 'Where Do I Park?',
          a: 'There are two locations to park. If you are bringing your child, you can park in the Piedmont Wellness Center parking lot, and a shuttle can take you over to the main gathering after you drop off your child. If you do not have any children to drop off, you can park in the lot located right outside the Town Stage and the Shipyard (125 Shepperton Way, Fayetteville, GA 30214). The Town Stage is where we will have our main gatherings. We will have Door Holders scattered throughout to help direct you where you need to go!',
        },
      ],
      intro:
        "Building a community founded on the truth of Christ's teachings,where love, faith, and service come together to make a positive impact on the world.",
      p1: "We foster a community rooted in the truth of Christ's teachings,where honesty, integrity, and accountability are upheld to make a positive impact on society.",
      p2: 'At Living Truth Worship Centre, we welcome people of all ages to join us for Sunday service. Read on to discover what to expect during our gatherings.',
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
      info: [
        { head: 'Main Service', body: '9:15am • 11:00am • 4:30pm' },
        { head: 'Main Service', body: '9:15am • 11:00am • 4:30pm' },
      ],
    },
    expectations: {
      title: 'What you should be prepared for',
      title_exp:
        'When you visit Living Truth Worship Centre, you can anticipate an enjoyable experience while connecting with God in a meaningful manner.',
      info: [
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
        {
          head: 'Content',
          body: "Hol' lotta content here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.",
        },
      ],
    },
  },
}

export default allData
