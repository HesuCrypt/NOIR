import { TeamMember, Project, Service, Value } from './types';
import {
  Code2,
  Database,
  Layout,
  Cpu,
  Globe,
  Layers
} from 'lucide-react';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Louisse Dominique Bertillo",
    role: "Lead Developer / Full Stack Engineer",
    description: "Louisse leads the technical direction of the agency. He handles system architecture, front-end and back-end development, and overall product quality. With hands-on experience in production systems such as e-commerce platforms and live auction websites, he focuses on building scalable, maintainable codebases paired with refined user experiences.",
    expertise: [
      "React, TypeScript, Tailwind CSS",
      "PHP, MySQL",
      "Shopify, Webflow, WordPress",
      "UI/UX Implementation",
      "AI-assisted workflows"
    ],
    portfolioUrl: "https://louisse-portfolio.vercel.app/"
  },
  {
    name: "Gerald Bitago",
    role: "Full Stack Developer",
    description: "Gerald works across both front-end and back-end systems, supporting application logic, database integration, and core platform features. He ensures system reliability, scalability, and smooth functionality in production environments.",
    portfolioUrl: "https://gerald-bitago-portflio-sxwj0ttp4y.vercel.app/#app"
  }
];

export const CURRENT_PROJECT: Project = {
  name: "Meridian Auctions",
  description: "A live auction platform used by real users, involving real-world data and transactions.",
  scope: [
    "Front-end and full-stack development",
    "Auction system features",
    "API and database integration",
    "Responsive UI across devices",
    "Performance, stability, and production support"
  ],
  url: "https://www.meridianauctions.com/"
};

export const SERVICES: Service[] = [
  { title: "Custom Website Development" },
  { title: "Full-Stack Web Applications" },
  { title: "Front-End Engineering & UI Systems" },
  { title: "CMS-Based Websites (Shopify, Webflow, WP)" },
  { title: "Performance Optimization" },
  { title: "Ongoing Maintenance & Updates" }
];

export const VALUES: Value[] = [
  { title: "Small Team, Direct Communication" },
  { title: "Clean & Maintainable Code" },
  { title: "Design-Aware Development" },
  { title: "Production-Ready Solutions" },
  { title: "Long-Term Scalability" }
];

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];