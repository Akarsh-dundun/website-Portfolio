import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    python,
    cpp,
    TF,
    wipro,
    Library,
    House,
    Movie,
    Toxic,
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
      title: "Artificial Intelligence and Machine Learning",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Electrical Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    { 
      name: "Python",
      icon: python,
    },
    { 
      name: "C++",
      icon: cpp,
    },
    { 
      name: "TensorFlow",
      icon: TF,
    },
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Wipro",
      icon: wipro,
      iconBg: "#fff",
      date: "June 2023 - July 2023",
      points: [
        "Assisted in developing and implementing machine learning models for the Movie Review Application.",
        "Developing solutions using machine learning for existing or new problems pertaining to the public",
        "Conducted data preprocessing, feature engineering, and data analysis to optimize model performance.",
        "Collaborated with cross-functional teams to gather requirements and define project objectives.",
        "Conducted experiments and performed model evaluation to measure the accuracy, precision, and recall of ML models.",

      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie Review Application",
      description:
        "Web-based platform that allows users to search and get a verdict whether to watch a movie or not based on user reviews from ImDb.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Movie,
      source_code_link: "https://github.com/Akarsh-dundun/Movie_Review_System",
    },
    {
      name: "Toxic Comment Classifier",
      description:
        "Machine Learning Algorithm that can be used to comb through various comments.",
      tags: [
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "green-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
      ],
      image: Toxic,
      source_code_link: "https://github.com/Akarsh-dundun/Toxic-Comment",
    },
    {
      name: "Bangalore House Price Prediction",
      description:
        "Web application that enables users to get an estimate on what a property might cost in suburban Bangalore.",
      tags: [
        {
          name: "Scikit-Learn",
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
      image: House,
      source_code_link: "https://github.com/Akarsh-dundun/Bangalore-House-Price-Prediction",
    },
    {
      name: "Library Management System",
      description:
        "Tkinter Graphical User Interface that allows a librarian to keep track of books as well as members",
      tags: [
        {
          name: "Tkinter",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Pickle",
          color: "pink-text-gradient",
        },
      ],
      image: Library,
      source_code_link: "https://github.com/Akarsh-dundun/Library-Management-System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };