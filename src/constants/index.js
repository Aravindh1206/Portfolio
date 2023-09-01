import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nyit,
  cognizant,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graduate Assistant",
    company_name: "New York Institute of Technology",
    icon: nyit,
    iconBg: "#F8F803",
    date: "Jan 2023 - May 2023",
    points: [
      "Orchestrated: a paradigm shift by implementing advanced Spring framework techniques, resulting in a remarkable 20% surge in overall system efficiency.",
      "Mastered: the art of software testing and version control using Git, while harnessing the full potential of AWS cloud services, leading to an impressive 15% reduction in technical issues.",
      "Unveiled: an agile time-compression strategy, expediting project timelines by an exceptional 30%, thereby boosting team productivity to new heights.",
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "lightblue",
    date: "Aug 2021 - Aug 2022",
    points: [
      "Developed: a platform using MERN stack technologies to design and develop an innovative airline booking platform, driving a remarkable 40% surge in bookings and revenue.",
      "Real-Time Flight Availability Module: Engineered a dynamic flight availability and pricing module with Node.js, seamlessly integrated with external APIs, achieving a flawless 99.9% accuracy rate.",
      "Enhanced User Experience: Architected a user-friendly interface with React.js, resulting in a remarkable 25% reduction in bounce rate, effectively improving portal's appeal.",
      "Interactive Seat Selection Feature: Revolutionized user experience with a seat selection feature with HTML5, CSS3, and JavaScript, leading to a remarkable 30% increase in upsells for premium seats.",
    ],
  },
  {
    title: "Programmer Analyst Intern",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "blue",
    date: "Jan 2021 - Jun 2021",
    points: [
      "Aligned:  with product development team in building front end components for product to schedule appointments, roll out emails, gift cards redemption feature to enhance customer experience in platform.",
      "Revamped: Angular/React.js UI components involving forms, data grids etc., For large scale applications involving complex transactions and user interactions, handled authentication and authorization adopting OAuth 2.0 principles and JWT tokens.", 
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible making a website as beautiful as our product,but Aravindh proved me wrong.",
    name: "Dhanya",
    designation: "Sr.Manager",
    company: "Cognizant",
  },
  {
    testimonial:
      "It's a great time working with Aravindh.   I am impressed with his skillsand his dedication towards work",
    name: "Vinod Raja",
    designation: "Manager",
    company: "Cognizant",
  },
  {
    testimonial:
      "Aravindh is one of the finest developer    I have ever worked with and his output in work is always satisfactory",
    name: "Jackline Okot",
    designation: "Graduate Advisor",
    company: "New York Institute of Technology",
  },
];

const projects = [
  {
    name: "Medical Bill",
    description:
      "The application is designed for only GET and POST requests on a medical bill with both endpoints on JSON. We did not use any database as we just store the data in memory ( data is erased once the server is off). We do API testing for both endpoints.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fable",
    description:
      "Dynamic web application on Node.js + Express.js (backend) and React.js (frontend) with MongoDB as the database. Proficient in user authentication using Firebase and pioneering social storytelling features, enabling seamless reader-author interactions for public storytelling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "FHL Tracker",
    description:
      "We approach the problem statement by finding the shortest time taken to deliver the goods from one location to another. For finding the shortest route and time we use the Dijkstra Algorithm to predict the shortest time taken from one location to another using directed graphs.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
