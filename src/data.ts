export interface Project {
  title: string;
  subtitle: string;
  image: string;
  url: string;
  features: string[];
}

export interface Experience {
  role: string;
  company: string;
  image: string;
  caption: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    title: "Windows Optimizer",
    subtitle: "Windows system performance enhancement tool",
    image: "imgs/Window_Optimizer.png",
    url: "https://github.com/Jkhaleed/Window-Optimizer",
    features: [
      "Monitors virtual memory and system information",
      "Provides visual-effects configuration",
      "Controls brightness and mouse settings",
      "Provides quick access to Windows tools",
    ],
  },
  {
    title: "Halimat African Store",
    subtitle: "Full-stack e-commerce platform",
    image: "imgs/Halimatstore.jpg",
    url: "https://github.com/Jkhaleed/Halimat-African-Store",
    features: [
      "Developed a full-stack web application",
      "Implemented product catalogue management",
      "Added shopping-cart functionality",
      "Created a responsive user interface",
    ],
  },
  {
    title: "Engineering Project",
    subtitle: "Hardware and automation solution",
    image: "imgs/eng.jpg",
    url: "https://github.com/Jkhaleed",
    features: [
      "Integrated hardware components",
      "Developed an automation system",
      "Improved system performance",
      "Performed real-world testing",
    ],
  },
  {
    title: "Rental Listing Platform",
    subtitle: "Full-stack property rental application",
    image: "imgs/rental-listing.png",
    url: "https://github.com/Jkhaleed/-Rental-Listing-Platform",
    features: [
      "Built a responsive interface for browsing rental properties",
      "Developed separate frontend and backend applications",
      "Connected the frontend to REST API endpoints",
      "Implemented property listing and search functionality",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Desktop Support Analyst",
    company: "S&C Electric Canada",
    image: "imgs/sc-electric.jpg",
    caption: "S&C Electric",
    bullets: [
      "Resolved hardware, software, account, printer, and network-related support requests through ServiceNow.",
      "Configured and deployed Windows laptops and tablets while supporting device enrollment, software installation, and hardware reclamation.",
      "Supported users through in-person and remote troubleshooting using Windows 11, Active Directory, Intune, Device Manager, and HP Support Assistant.",
    ],
  },
  {
    role: "Director of Marketing",
    company: "Guelph Engineering Society",
    image: "imgs/GESS.jpg",
    caption: "GESS",
    bullets: [
      "Improved communication consistency and reach for 100+ students.",
      "Designed and managed automated email and announcement workflows.",
      "Increased engagement consistency by 35% and reduced manual effort by 50%.",
    ],
  },
  {
    role: "Customer Service Analyst",
    company: "Nuseries",
    image: "imgs/Nuseries.jpg",
    caption: "Nuseries",
    bullets: [
      "Improved customer-service efficiency and operational processes.",
      "Streamlined support, inventory, and checkout workflows.",
      "Achieved 90% first-contact resolution and improved inventory accuracy by 25%.",
    ],
  },
];