export const myProjects = [
  {
    id: 1,
    title: "Multi-Image Steganography Using Invertible Neural Networks",
    description:
      "Designed and implemented a production-grade multi-secret image steganography platform leveraging an Invertible Neural Network cascade. The architecture embeds multiple hidden images into a single cover container with minimal visual distortion while maintaining reversible, high-fidelity image recovery.",
    subDescription: [
      "Deep Learning Architecture: Implemented a five-stage Invertible Neural Network (INN) cascade built on the DeepMIH framework, enabling bidirectional forward embedding and backward secret recovery.",
      "Robust Backend & Security: Engineered a secure backend architecture featuring JWT authentication, TOTP two-factor authentication, Role-Based Access Control (RBAC), and an AES-256-GCM encrypted key-management pipeline.",
    ],
    href: "",
    tags: [
      { id: 1, name: "PyTorch", path: "/assets/logos/pytorch.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "Go", path: "/assets/logos/go.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
    ],
  },
  {
    id: 2,
    title: "Serverless CI/CD Deployment Pipeline",
    description:
      "Architected and deployed a fully automated, event-driven serverless CI/CD pipeline on AWS. The system triggers seamless builds, automated artifact packaging, and container deployments directly from dynamic GitHub repository webhook events.",
    subDescription: [
      "Event-Driven Automation: Built a fully managed pipeline using AWS Lambda, API Gateway, Amazon S3, and AWS CodePipeline to orchestrate automated builds upon every code push.",
      "Secure Webhook Handler: Developed a Node.js serverless ingestion service validating HMAC SHA-256 signatures, pulling repository source archives via GitHub REST APIs, and streaming versioned build artifacts into Amazon S3 buckets.",
    ],
    href: "",
    tags: [
      { id: 1, name: "AWS Lambda", path: "/assets/logos/aws-lambda.svg" },
      { id: 2, name: "AWS CodePipeline", path: "/assets/logos/aws-codepipeline.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 4, name: "Amazon S3", path: "/assets/logos/aws-s3.svg" },
    ],
  },
  {
    id: 3,
    title: "Groceria (React Native Grocery App)",
    description:
      "Engineered Groceria, a high-performance cross-platform mobile grocery ordering application built with React Native. The platform connects consumers to real-time inventory catalogues, order tracking, and a streamlined mobile checkout flow.",
    subDescription: [
      "Cross-Platform Mobile App: Developed intuitive mobile interfaces using React Native, consuming modular RESTful APIs for customer authentication, product catalog management, and order lifecycle tracking.",
      "Frictionless Checkout & Payments: Integrated secure Stripe mobile payment processing, condensing the checkout funnel into three steps and reducing cart abandonment by 30%.",
    ],
    href: "",
    tags: [
      { id: 1, name: "React Native", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "Tailwind CSS", path: "/assets/logos/tailwindcss-icon.svg" },
    ],
  },
  {
    id: 4,
    title: "Smart Food Quality and Spoilage Detection System (IoT)",
    description:
      "An Internet of Things (IoT) system designed to intelligently monitor the quality of stored food in real time. Using a suite of sensors, it detects early signs of spoilage and automatically alerts users, aiming to reduce food waste and enhance food safety.",
    subDescription: [
      "Real-Time Quality Monitoring: Designed and implemented a comprehensive IoT system using gas, temperature, and humidity sensors to continuously track the environmental conditions and freshness of stored food items.",
      "Waste Reduction Automation: Engineered an automated alert mechanism that sends email notifications based on real-time sensor data, successfully demonstrating a 25% reduction in potential food waste.",
      "Immediate Spoilage Notifications: Implemented a critical alert feature that provides instant notifications the moment food is detected as spoiled, ensuring consumer safety and preventing the use of contaminated items.",
    ],
    href: "",
    tags: [{ id: 1, name: "Arduino", path: "/assets/logos/arduino.svg" }],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919344956610",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hema-mohan-a1966320b/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const educations = [
  {
    title: "Master of Computer Applications",
    job: "Anna University, CEG Campus",
    date: "2024-2026",
    contents: [
      "Through my Master of Computer Applications program, I am actively transitioning from theoretical concepts to practical, real-world application development. My focus is on mastering full-stack development, where I am building dynamic and scalable web applications using the MERN stack. Concurrently, I am strengthening my expertise in system design, database architecture with both SQL and NoSQL, and modern software engineering principles like Agile. Beyond core development, I am applying concepts in cloud computing and machine learning to engineer more intelligent and efficient solutions for complex business problems.",
    ],
  },
  {
    title: "Bachelor of Science in Mathematics",
    date: "2020-2023",
    contents: [
      "My Bachelor of Science in Mathematics provided a rigorous foundation for systematically tackling complex problems. Through this program, I developed strong analytical and quantitative reasoning skills, learning to deconstruct abstract challenges into logical, manageable components. I applied principles from Calculus and Differential Equations to model real-world phenomena, and utilized Linear Algebra and Statistics to analyze and interpret complex data sets. This degree honed my ability to approach challenges with precision, logic, and a data-driven mindset, equipping me to find efficient solutions in any technical environment.",
    ],
  },
];