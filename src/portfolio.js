/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "M Krishna",
  title: "Hi all, I'm Krishna",
  subTitle: emoji(
    "A passionate AI & Computer Vision Engineer 🚀 with experience in Python, Deep Learning, and Computer Vision. Skilled in developing intelligent systems and implementing machine learning solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Krishna2004M",
  linkedin: "https://www.linkedin.com/in/m-krishna-krishna/",
  gmail: "krishbabu2004@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER SPECIALIZING IN COMPUTER VISION AND NLP",
  skills: [
    emoji(
      "⚡ Develop and implement computer vision models for image processing and object detection"
    ),
    emoji(
      "⚡ Build and fine-tune NLP models for text analysis and language understanding"
    ),
    emoji(
      "⚡ Create end-to-end AI solutions integrating multiple ML frameworks and APIs"
    ),
    emoji(
      "⚡ Implement deep learning architectures and optimize model performance"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "OpenAI API",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/lpulogo.jpg"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "Dec 2024 - Present",
      desc: "CGPA: 5.3",
      descBullets: [
        "Studying advanced computer science concepts and technologies",
        "Focusing on AI, Machine Learning, and Computer Vision"
      ]
    },
    {
      schoolName: "Tamil Nadu Government Polytechnic College",
      logo: require("./assets/images/TNPTlogo.jpg"),
      subHeader: "Diploma in Computer Science and Engineering",
      duration: "Apr 2020 - Mar 2023",
      desc: "Percentage: 88.7%",
      descBullets: [
        "Learned fundamentals of computer science and programming",
        "Developed strong foundation in software development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Model Deployment & MLOps",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Processing & Feature Engineering",
      progressPercentage: "65%"
    },
    {
      Stack: "NLP & Computer Vision",
      progressPercentage: "85%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Artificial Intelligence Intern",
      company: "Infosys",
      companylogo: require("./assets/images/infosyslogo.jpg"),
      date: "Mar 2024 - Jun 2024",
      desc: "Developed system-generating computer vision (DETR model) and NLP (GPT-3.5-turbo) to generate engaging narratives from images",
      descBullets: [
        "Implemented features for drawing bounding boxes with object labels to enhance visualization and storytelling automation",
        "Utilized Python, Hugging Face Transformers, PIL, and the OpenAI API to integrate workflows seamlessly"
      ]
    },
    {
      role: "Student Intern",
      company: "BSNL Ltd",
      companylogo: require("./assets/images/BSNLlogo.png"),
      date: "Jul 2022 - Aug 2022",
      desc: "Gained hands-on experience in advanced networking and NGN architecture",
      descBullets: [
        "Assisted in implementing telecommunication protocols and data transmission systems",
        "Enhanced knowledge in network protocols and network infrastructure design"
      ]
    }
  ]
};

//Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Segmedix",
      projectDesc:
        "Segmedix is an AI-powered platform that detects brain tumors from MRI scans by identifying the tumor's size, type, and location with high accuracy. It instantly generates a clinical report with diagnosis and treatment suggestions without any manual input. The system is designed to scale further for diagnosing conditions in other organs like the liver and heart.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://segmedix.com/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Published Research Paper",
      subtitle:
        "Code-Mixing and Code-Switching Using CNN, SVM, LSTM, and N-Gram at Hinweis International Conference",
      image: require("./assets/images/paper.png"),
      footerLink: [
        {
          name: "View Paper",
          url: "https://thegrenze.com/pages/servej.php?fn=82.pdf&name=Code-Mixing%20and%20Code-Switching%20Detection%20usingSVM,%20LSTM,%20CNN%20and%20N-Gram%20Models&id=3891&association=GRENZE&journal=GIJET&year=2025&volume=11&issue=1"
        }
      ]
    },
    {
      title: "Gold Medalist in Diploma",
      subtitle:
        "Achieved Gold Medal in Computer Science Engineering for academic excellence",
      image: require("./assets/images/gold.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },
    {
      title: "AI Tech Event at Infosys",
      subtitle:
        'Presented the project "The Art of Visual Storytelling" at the Celebrating Tech @ Bangalore DC – AI in Action event hosted by Infosys, showcasing AI-driven image-to-story generation.',
      image: require("./assets/images/infosysevent.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    }
  ],
  display: true
};

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "Exploring AI, Computer Vision, and Machine Learning through discussions",
  // podcast: [
  //   "https://anchor.fm/ai-tech-talks/embed/episodes/AI-in-Computer-Vision-and-NLP-e1abcde"
  // ],
  // display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9788679188",
  email_address: "krishbabu2004@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: true
};

const isHireable = false;

const openSource = {
  showGithubProfile: "true",
  display: true
};

const blogSection = {
  // title: "Blogs",
  // subtitle: "Sharing insights and knowledge about AI, Computer Vision, and Machine Learning",
  // displayMediumBlogs: "true",
  // blogs: [
  //   {
  //     url: "https://medium.com/@krishbabu2004/understanding-computer-vision-models-a-comprehensive-guide",
  //     title: "Understanding Computer Vision Models: A Comprehensive Guide",
  //     description: "A deep dive into different computer vision models, their architectures, and real-world applications in image processing and object detection."
  //   },
  //     {
  //       url: "https://medium.com/@krishbabu2004/building-ai-solutions-with-python-and-tensorflow",
  //       title: "Building AI Solutions with Python and TensorFlow",
  //       description: "Practical guide to implementing AI solutions using Python and TensorFlow, covering model development, training, and deployment."
  //     },
  //     {
  //       url: "https://medium.com/@krishbabu2004/nlp-in-action-text-analysis-and-language-understanding",
  //       title: "NLP in Action: Text Analysis and Language Understanding",
  //       description: "Exploring Natural Language Processing techniques and their applications in text analysis, sentiment analysis, and language understanding."
  //     }
  //   ],
  //   display: true
};

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji("Sharing knowledge about AI, Computer Vision, and Machine Learning 🚀"),
  // talks: [
  //   {
  //     title: "AI in Action: Computer Vision Applications",
  //     subtitle: "Presented at Infosys AI Tech Event",
  //     slides_url: "",
  //     event_url: "",
  //   },
  //   {
  //     title: "Building Intelligent Systems with Python",
  //     subtitle: "Guest Lecture at Lovely Professional University",
  //     slides_url: "",
  //     event_url: "",
  //   },
  // ],
  // display: true,
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
