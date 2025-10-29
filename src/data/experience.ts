import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Developer",
    organisation: {
      name: "Team Geek Solutions",
      href: "https://www.teamgeeksolutions.com/",
    },
    date: "March 2025 – September 2025",
    location: "Remote",
    description: "Reactjs and Nextjs app development",
    showDescription: true, // show description
  },
  {
    title: "Software Intern",
    organisation: {
      name: "VPESS Electronics Security Solution Pvt. Ltd.",
      href: "",
    },
    date: "September 2024 – February 2025",
    location: "Remote",
    description:
      "Maintained and enhanced the company website by integrating new features and improving responsiveness.",
    showDescription: true,
  },
  {
    title: "Graphic Designer",
    organisation: { name: "Blitz Jobs", href: "https://blitzjobs.in/" },
    date: "Jul 2021 - Sep 2021",
    location: "Remote",
    description:
      "Gained hands-on experience creating graphic designs and marketing materials using Figma, Canva, and Photoshop, developing brand visuals, banners, social media posts, and presentation templates, applying design principles, collaborating with teams, and improving wireframing and prototyping skills.",
    showDescription: true,
  },
];
