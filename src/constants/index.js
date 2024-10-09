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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";


import user1 from "../assets/profile-pictures/user1.png";

import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";

  
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
      title: "Application Developer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Normal Portfolio Creation",
      
      icon: starbucks,
      iconBg: "#383E56",
      points: [
        "Custom website design tailored to your business needs.",
"Responsive layouts optimized for mobile and desktop devices.",
"Fast and secure websites with top-notch performance.",
"Full support from development to post-launch maintenance."
      ],
    },
    {
      title: "3D Portfolio Creation",
  
      icon: tesla,
      iconBg: "#E6DEDD",

      points: [
        "Immersive 3D portfolio designs to showcase your work.",
        "Interactive and engaging visuals for a unique user experience.",
        "Optimized for fast loading and smooth performance across devices.",
        "Tailored layouts that bring your personal or company brand to life."
      ],
    },
    {
      title: "Website Development Services",
      
      icon: shopify,
      iconBg: "#383E56",
 
      points: [
        "Custom website design tailored to your business needs.",
        "Responsive layouts optimized for mobile and desktop devices.",
        "Fast and secure websites with top-notch performance.",
        "Full support from development to post-launch maintenance.",
      ],
    },
    {
      title: "Desktop App Development Services",

      icon: meta,
      iconBg: "#E6DEDD",
      points: [
        "Cross-platform desktop apps with a seamless user experience.",
        "Integration with local databases or cloud services.",
        "Efficient, high-performance applications for business solutions.",
        "Custom features tailored to your unique requirements.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
      name: "Shikhar Ganeshe",
      designation: "UI/UX Developer",
      company: "UI/UX ",
      image: user1,
    },
    {
      testimonial:
        "Working with the team at HK Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
      name: "Rohit Nare",
      company: "G-Fresh",
      image: user3,
    },
    {
      testimonial:
        "Working with this company was a pleasure better than my one. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
      name: "Surya Rawat",
      designation: "Advocate",
      company: "Advocate Firm",
      image: user4,
    },
  ];
  
  const projects = [
    {
      name: "Tally Connect",
      description:
        "TallyConnect seamlessly integrates Tally ERP with your React app, providing real-time access to financial data and insights. Effortlessly visualize and analyze your business metrics with a user-friendly interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "electron",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Bank Staff Detail Managing App",
      description:
        "Stay organized and connected with your team, ensuring every event is a success. Join us to elevate your bank management experience!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "electron",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "Showcase your skills and achievements with our professional portfolio creation service. Tailored to highlight your unique strengths, our visually appealing designs help you stand out in any field. Let us help you make a lasting impression!",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };