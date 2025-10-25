import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

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
    // favicon: "",
    imageUrl: [
      "/images/projects/logos/image.png",
      "/images/projects/logos/image car 2.jpg",
    ],
    description:
      "User-friendly car rental platform with React.js & Ant Design. Features admin dashboard, RESTful APIs, MongoDB storage, Stripe payments, and Redux for state management",
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
    sourceCodeHref: "",
    liveWebsiteHref: "",
  },
  {
    name: "Many Games",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/BUMBAIYA/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "My portfolio",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
