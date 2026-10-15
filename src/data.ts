
export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  video?: string;
  poster?: string;
  gallery?: string[];
  repository?: string;
  technologies: string[];
  highlights: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  image: string;
  bullets: string[];
}

// ==================== PROJECTS ====================

export const projects: Project[] = [
  {
    slug: "saferoute",
    title: "SafeRoute",
    eyebrow: "UX/UI Case Study · 24-Hour Hackathon",
    summary:
      "An interactive route-planning prototype that helps users compare route alternatives through illustrative safety ratings, clear explanations, and an accessible navigation experience.",
    image: "imgs/SafeRoute_Route_Safety_Dashboard.png",
    repository: "https://github.com/AngDha/SafeRoute",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "Python",
      "UX/UI Design",
    ],

    highlights: [
      "Multiple route alternatives with colour-coded safety tiers",
      "Plain-language explanations through a 'Why this rating?' feature",
      "Location autocomplete, current-location shortcuts, and travel modes",
    ],

    challenge:
      "Most navigation tools prioritize the fastest route. Our four-person hackathon team explored how travellers could compare multiple routes while understanding additional safety-related information. The design challenge was presenting these comparisons clearly without overwhelming users.",

    solution:
      "We developed a responsive web application using Next.js, TypeScript, Tailwind CSS, Python, and Google Maps APIs. The interface displays alternative routes with green, yellow, and red safety tiers, location search, travel-mode selection, and explanations for each rating. These interaction choices make route information easier to compare and understand.",

    outcome:
      "The team produced a functional web prototype within a 24-hour hackathon. Its safety ratings use illustrative heuristics rather than verified live incident data. The project demonstrates an approach to information hierarchy, interface clarity, and communicating uncertainty, while identifying opportunities for future usability and accessibility improvements.",
  },

  {
    slug: "autonomous-recycling-vehicle",
    title: "Autonomous Recycling Vehicle",
    eyebrow: "Guelph Engineering Competition 2026",
    summary:
      "A team-built autonomous vehicle designed to identify and collect recyclable materials while navigating around waste in a simulated landfill.",
    image: "imgs/IMG_9755.jpg",
    video: "videos/autonomous-recycling-vehicle.mp4",
    poster: "imgs/IMG_9758.jpg",

    gallery: [
      "imgs/IMG_9754.jpg",
      "imgs/IMG_9757.jpg",
      "imgs/IMG_9756.jpg",
      "imgs/IMG_9758.jpg",
    ],

    technologies: [
      "Arduino",
      "Embedded Systems",
      "Sensors",
      "Autonomous Robotics",
      "Rapid Prototyping",
    ],

    highlights: [
      "Autonomous grid navigation",
      "Front scoop collection mechanism",
      "Reused cardboard and paper construction",
    ],

    challenge:
      "The competition required an autonomous vehicle that could move through a randomized simulated landfill, collect recyclable objects and avoid disturbing or collecting garbage.",

    solution:
      "Our team built an Arduino-based four-wheel vehicle with onboard sensing and control electronics. A wide, low-profile front scoop guided target objects into a collection area, while lightweight reused cardboard and paper formed the chassis and mechanism. We iterated through sketches, assembly and live course testing under the competition time limit.",

    outcome:
      "The completed prototype demonstrated autonomous movement on the test grid and a functional collection approach, combining embedded control, mechanical design, sustainable material reuse and rapid team-based iteration.",
  },

  {
    slug: "rental-listing-platform",
    title: "Rental Listing Platform",
    eyebrow: "Full-stack web application",
    summary:
      "A property discovery platform that collects and presents updated rental listings through a responsive React interface and Django API.",
    image: "imgs/rental-listing.png",
    repository:
      "https://github.com/Jkhaleed/-Rental-Listing-Platform",

    technologies: [
      "React",
      "TypeScript",
      "Django",
      "REST API",
      "Python",
    ],

    highlights: [
      "Responsive property browsing",
      "Frontend and backend integration",
      "Search and listing workflows",
    ],

    challenge:
      "Rental information is distributed across multiple sources, making it difficult for students and renters to review current options efficiently.",

    solution:
      "The application uses a Vite and React frontend with a Django backend, connected through REST endpoints for listing retrieval and search.",

    outcome:
      "The result is a structured rental-search experience demonstrating full-stack architecture, API integration and practical data presentation.",
  },

  {
    slug: "reverse-engineering-project",
    title: "Reverse Engineering Project",
    eyebrow: "Six-person engineering design project",
    summary:
      "A collaborative reverse-engineering project that recreated a mechanical system as a complete digital assembly and documented its construction sequence.",
    image: "imgs/reverse-engineering-poster.jpg",
    video: "videos/reverse-engineering-project.mp4",
    poster: "imgs/reverse-engineering-poster.jpg",

    technologies: [
      "CAD",
      "Mechanical Design",
      "Reverse Engineering",
      "Team Collaboration",
    ],

    highlights: [
      "Complete digital assembly",
      "Exploded-view animation",
      "Six-person technical collaboration",
    ],

    challenge:
      "The group needed to understand how the original system's components related to one another and reproduce those relationships accurately in a digital model.",

    solution:
      "The six-person team divided component analysis and modelling, combined the parts into a unified assembly and created an exploded-view sequence to communicate the design.",

    outcome:
      "The final model demonstrates the full component structure, assembly order and integration of the reverse-engineered system.",
  },

  {
    slug: "windows-optimizer",
    title: "Windows Optimizer",
    eyebrow: "Desktop utility",
    summary:
      "A Windows utility that centralizes system information, performance settings and commonly used operating-system tools.",
    image: "imgs/Window_Optimizer.png",
    repository:
      "https://github.com/Jkhaleed/Window-Optimizer",

    technologies: [
      "Python",
      "Windows",
      "System Utilities",
      "UI Development",
    ],

    highlights: [
      "Virtual-memory monitoring",
      "Visual-effects configuration",
      "Windows settings shortcuts",
    ],

    challenge:
      "Useful Windows performance and accessibility controls are spread across several system menus and utilities.",

    solution:
      "The application brings system information and frequently used configuration tools into one interface.",

    outcome:
      "The project demonstrates desktop UI development and practical interaction with Windows system settings.",
  },

  {
    slug: "halimat-african-store",
    title: "Halimat African Store",
    eyebrow: "E-commerce application",
    summary:
      "A responsive full-stack storefront designed to organize products and support a simple online shopping workflow.",
    image: "imgs/Halimatstore.jpg",
    repository:
      "https://github.com/Jkhaleed/Halimat-African-Store",

    technologies: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "SQL",
    ],

    highlights: [
      "Product catalogue",
      "Shopping-cart workflow",
      "Responsive storefront",
    ],

    challenge:
      "The store required a clear digital catalogue and a simple way for customers to browse and organize purchases.",

    solution:
      "The application combines product management, responsive pages and shopping-cart functionality in a full-stack architecture.",

    outcome:
      "The result is a practical e-commerce foundation that can be extended with checkout, inventory and customer-account features.",
  },

  {
    slug: "automation-system",
    title: "Engineering Automation System",
    eyebrow: "Hardware project",
    summary:
      "A physical engineering system combining mechanical construction, hardware integration and automated behaviour.",
    image: "imgs/eng.jpg",
    repository: "https://github.com/Jkhaleed",

    technologies: [
      "Hardware",
      "Automation",
      "Testing",
      "Engineering Design",
    ],

    highlights: [
      "Hardware integration",
      "Automated operation",
      "Real-world testing",
    ],

    challenge:
      "The project required mechanical and electronic elements to operate together reliably as one complete system.",

    solution:
      "Components were integrated incrementally, tested as subsystems and refined based on observed performance.",

    outcome:
      "The completed prototype demonstrated functional automation and reinforced iterative engineering design practices.",
  },
];

// ==================== EXPERIENCE ====================

export const experiences: Experience[] = [
  {
    role: "Desktop Support Analyst",
    company: "S&C Electric Canada",
    period: "May 2026 — August 2026",
    location: "Toronto, Ontario",
    image: "imgs/sc-electric.jpg",

    bullets: [
      "Resolved hardware, software, account, printer and network support requests through ServiceNow.",
      "Configured and deployed Windows laptops and tablets, including device enrolment and software installation.",
      "Supported users with Windows 11, Active Directory, Intune, Device Manager and HP Support Assistant.",
    ],
  },

  {
    role: "Director of Marketing",
    company: "Guelph Engineering Society",
    period: "September 2025 — April 2026",
    location: "Guelph, Ontario",
    image: "imgs/GESS.jpg",

    bullets: [
      "Coordinated communications and outreach for the engineering student community.",
      "Designed repeatable email and announcement workflows for campaigns and events.",
      "Improved consistency while reducing manual work across marketing activities.",
    ],
  },

  {
    role: "Customer Service Analyst",
    company: "Nuseries",
    period: "Previous experience",
    location: "Ontario",
    image: "imgs/Nuseries.jpg",

    bullets: [
      "Improved customer-service and operational workflows.",
      "Streamlined support, inventory and checkout procedures.",
      "Maintained a strong first-contact resolution rate and improved inventory accuracy.",
    ],
  },
];
