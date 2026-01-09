import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Car Rental Platform ",
    href: "/projects",
    tags: [
      "React.js",
      "Ant Design",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Stripe API",
    ],
    image: {
      LIGHT: "/images/projects/logos/image.png",
      DARK: "/images/projects/logos/image car 2.jpg",
    },
  },
  {
    index: 1,
    title: "Chat Application ",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Socket.IO",
    ],
    image: {
      LIGHT: "/images/projects/logos/Real time 2 .png",
      DARK: "/images/projects/logos/Real time 3 .png",
    },
  },
  {
    index: 2,
    title: "Fitness-Club",
    href: "/projects",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: {
      LIGHT: "/images/projects/logos/gym 2.png",
      DARK: "/images/projects/logos/gym d.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Car Rental Platform",
    imageUrl: [
      "/images/projects/logos/image.png",
      "/images/projects/logos/image car 2.jpg",
    ],
    description:
      "User-friendly car rental platform with React.js & Ant Design. Features admin dashboard, RESTful APIs, MongoDB storage, Stripe payments, and Redux for state management.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "Chat Application (Talk-Time)",
    imageUrl: [
      "/images/projects/logos/Real time !-.png",
      "/images/projects/logos/Real time 2 .png",
      "/images/projects/logos/Real time 3 .png",
    ],
    description:
      "Real-time chat app using MERN & Socket.IO with responsive UI via Tailwind & Daisy UI. Features secure auth, message persistence in MongoDB, REST APIs, and efficient state management.",
    sourceCodeHref: "https://github.com/ayushpandey7355/CHAT_-APP",
    liveWebsiteHref: "https://chat-app-1-2a1x.onrender.com/",
  },
  {
    name: "Try-TextUtils — Word & Character Counter",
    imageUrl: [
      "/images/projects/logos/count1.png",
      "/images/projects/logos/count2.png",
    ],
    description:
      "A React-based utility tool that counts words, characters, and removes extra spaces. It also allows quick text formatting operations with an intuitive UI.",
    sourceCodeHref:
      "https://github.com/ayushpandey7355/Try-TextUtils---word-counter-character-counter-remove-extra-spaces-ayushpandey",
    liveWebsiteHref: "",
  },
  {
    name: "Calculator",
    imageUrl: [
      "/images/projects/logos/cal1.png",
      "/images/projects/logos/cal32.png",
      "/images/projects/logos/cal31.png",
    ],
    description:
      "A simple and responsive calculator built using HTML, CSS, and JavaScript to perform basic arithmetic operations.",
    sourceCodeHref:
      "https://github.com/ayushpandey7355/Creating-a-calculator-using-HTML-CSS-and-JavaScript",
    liveWebsiteHref: "",
  },
  {
    name: "Tic-Tac-Toe",
    imageUrl: [
      "/images/projects/logos/tictac12.png",
      "images/projects/logos/tictac2.png",
      "images/projects/logos/tictac3.png",
    ],
    description:
      "A classic Tic-Tac-Toe game built using HTML, CSS, and JavaScript. It offers a fun and interactive experience for two players.",
    sourceCodeHref: "https://ayushpandey7355.github.io/Tic-Tac-Toe/",
    liveWebsiteHref: "",
  },
  {
    name: "Rock-Paper-Scissors ",
    imageUrl: [
      "/images/projects/logos/p1.png",
      "/images/projects/logos/p2.png",
      "/images/projects/logos/p3.png",
    ],
    description:
      "Implementation of the classic Rock-Paper-Scissors game, demonstrating logic building and randomization concepts.",
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "Chrome Dino Game (Game Over Trigger)",
    imageUrl: [
      "/images/projects/logos/t1.png",
      "/images/projects/logos/t2.png",
      "/images/projects/logos/t3.png",
    ],
    description:
      "A JavaScript-based snippet to simulate and trigger Game Over events in the Chrome Dino game for testing or automation purposes.",
    sourceCodeHref:
      "https://github.com/ayushpandey7355/JavaScript-Code-to-Trigger-Game-Over-in-Chrome-Dino-Game",
    liveWebsiteHref: "",
  },
  {
    name: "Chess",
    imageUrl: [
      "/images/projects/logos/c1.png",
      "/images/projects/logos/c2.png",
      "/images/projects/logos/c3.png",
    ],
    description:
      "An interactive multiplayer chess game built using HTML, CSS, and JavaScript, featuring real-time gameplay, responsive design, and smooth user interactions.",
    sourceCodeHref: "https://github.com/ayushpandey7355/CHESS_MY_GAME",
    liveWebsiteHref: "",
  },
];
