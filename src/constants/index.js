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
    bookmystay,
    crypto,
    thread,
    threejs,
    image,
    corewaylab
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
      title: "Full Stack Developer",
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
      title: "Front-End Developer ",
      company_name: "InstaDukan",
      icon: backend,
      iconBg: "#383E56",
      date: "Nov 2023 - Feb 2024",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Operations Executive",
      company_name: "KreditBee",
      icon: backend,
      iconBg: "#383E56",
      date: "jan 2022  - sep 2023",
      points: [
       " Boosted loan disbursal by 5% through strategic implementation, demonstrating operational prowess and contributing to business growth.",
       
        "Successfully managed daily email escalations and payment issues, leading to a 15% decrease in delays and a 25% reduction in refund processing time.",
        "Increased brand visibility and user engagement by 25% through effective management of marketing and campaignoperations, leading to a 20% rise in customer acquisition and brand loyalty",
      ],
    },
    
    
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Himanshu proved me wrong.",
      name: "Suriya",
      designation: "CTO",
      company: "CoreWayLabs",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Himanshu does.",
      name: "Mukesh",
      designation: "Director",
      company: "S.M Upvc and Glass Decor",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Himanshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Book My Stay",
      description:
        "Web-based platform that allows users to search, book, and manage hotels  from various providers, providing a convenient and efficient solution for stays needs.",
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
      ],
      image: bookmystay,
      source_code_link: "https://lively-souffle-dd40d9.netlify.app/",
    },
    {
      name: "Cryptoverse",
      description:
        "Web application that enables users to search for crypto currency,view and see the latest news of cryptocurrency and see the price change using chart.js.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://stellular-mandazi-0d27f3.netlify.app/",
    },
    {
      name: "Thread clone",
      description:
        "A dynamic thread cloning project that facilitates the seamless replication of discussions & conversations Users can effortlessly follow and exchanges each other",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:thread,
      source_code_link: "https://thread2-3abaxlp33-himanshu7377.vercel.app/",
    },
  ];


  const clientWork =[
    {
      name: "S.M. Upvc and Glass ",
      description:
        "A Dynamic , UserFriendly and  Responsive website showcasing the products of S.M. Upvc and Glass Decor.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:image,
      source_code_link: "https://smupvcandglassdecor.in/",
    },
    {
      name: "CoreWayLabs",
      description:
        "A Dynamic , UserFriendly and  Responsive website showcasing the products corewaylabs.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:corewaylab,
      source_code_link: "https://corewaylabs.com/",
    },
  ] 
  
  export { services, technologies, experiences, testimonials, projects, clientWork };