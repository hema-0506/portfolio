export const myProjects = [
  {
    id: 1,
    title: "PERN Stack Freelance Platform",
    description:
      "Engineered Zetalent, a comprehensive, full-stack freelancer marketplace designed to seamlessly connect clients with skilled professionals. The platform provides an end-to-end solution for the gig economy, from user authentication and detailed profiles to gig creation, a seller analytics dashboard, secure payments with Stripe, and integrated order messaging.",
    subDescription: [
      `
      Dual-Role System: Users can dynamically switch between a \"Buyer\" and a \"Seller\" account, each with a tailored dashboard and functionalities.
      `,
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss-icon.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
    ],
  },
  {
    id: 2,
    title: "BookLens (MERN Stack Project)",
    description:
      "BookLens is a full-stack web application built on the MERN stack that transforms PDF stories into visually enriched experiences. It allows users to upload documents, instantly parses and displays the text, and leverages an AI model to automatically generate illustrations that correspond to the story's content.",
    subDescription: [
      `Full-Stack PDF Platform: Developed a complete MERN (MongoDB, Express.js, React, Node.js) application enabling users to seamlessly upload, store, and view PDF-based stories.

      High-Performance PDF Parsing: Engineered a robust backend feature to parse PDF documents, accurately extracting and rendering text content with high efficiency (under 2 seconds for documents up to 50 pages).

      AI-Powered Content Visualization: Integrated a cutting-edge text-to-image AI model that analyzes the extracted story text and automatically generates relevant, illustrative images, bringing the narrative to life.`,
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss-icon.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Smart Food Quality and Spoilage Detection System (IoT)",
    description:
      "This project is an Internet of Things (IoT) based system designed to intelligently monitor the quality of stored food in real-time. By utilizing a suite of sensors, the system detects early signs of spoilage and automatically alerts users, aiming to significantly reduce food waste and enhance food safety.",
    subDescription: [
      `Real-Time Quality Monitoring: Designed and implemented a comprehensive IoT system using gas, temperature, and humidity sensors to continuously track the environmental conditions and freshness of stored food items.

      Waste Reduction Automation: Engineered an automated alert mechanism that sends email notifications based on real-time sensor data, successfully demonstrating a 25% reduction in potential food waste.

      Immediate Spoilage Notifications: Implemented a critical alert feature that provides instant notifications the moment food is detected as spoiled, ensuring consumer safety and preventing the use of contaminated items.`,
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Arduino",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "ESP32",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "MQ series Sensor",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "ThingSpeak",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "C++ Game Engine",
  //   description:
  //     "A lightweight C++ game engine designed for 2D and 3D game development.",
  //   subDescription: [
  //     "Built a powerful rendering engine using OpenGL and C++.",
  //     "Developed a physics engine with collision detection and particle effects.",
  //     "Implemented a scripting system for easy game customization.",
  //     "Optimized performance with multi-threading and efficient memory management.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/game-engine.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "C++",
  //       path: "/assets/logos/cplusplus.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "C#",
  //       path: "/assets/logos/csharp.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Git",
  //       path: "/assets/logos/git.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Microsoft",
  //       path: "/assets/logos/microsoft.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hema-mohan-a1966320b/",
    icon: "/assets/socials/linkedIn.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/ali.sanatidev/reels/",
  //   icon: "/assets/socials/instagram.svg",
  // },
];

export const educations = [
  {
    title: "Master of Computer Applications",
    //job: "Security & Defense Projects",
    date: "2024-Present",
    contents: [
      "Through my Master of Computer Applications program, I am actively transitioning from theoretical concepts to practical, real-world application development. My focus is on mastering full-stack development, where I am building dynamic and scalable web applications using the MERN stack. Concurrently, I am strengthening my expertise in system design, database architecture with both SQL and NoSQL, and modern software engineering principles like Agile. Beyond core development, I am applying concepts in cloud computing and machine learning to engineer more intelligent and efficient solutions for complex business problems.",
    ],
  },
  {
    title: "Bachelor of Science in Mathematics",
    //job: "Car Manufacture",
    date: "2020-2023",
    contents: [
      "My Bachelor of Science in Mathematics provided a rigorous foundation for systematically tackling complex problems. Through this program, I developed strong analytical and quantitative reasoning skills, learning to deconstruct abstract challenges into logical, manageable components. I applied principles from Calculus and Differential Equations to model real-world phenomena, and utilized Linear Algebra and Statistics to analyze and interpret complex data sets. This degree honed my ability to approach challenges with precision, logic, and a data-driven mindset, equipping me to find efficient solutions in any technical environment.",
    ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];