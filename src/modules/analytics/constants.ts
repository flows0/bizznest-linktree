import type { LinkId, LinkProps, Statistic } from "./types";
import { FileUser, LayoutGrid } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const cardLinks: LinkProps[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    desc: "billyf-portfolio.vercel.app",
    link: "https://billyf-portfolio.vercel.app",
    Icon: LayoutGrid,
  },
  {
    id: "resume",
    title: "Resume",
    desc: "/files/billy-flowers-resume.pdf",
    link: "https://billyf-portfolio.vercel.app/files/billy-flowers-resume.pdf",
    Icon: FileUser,
  },
  {
    id: "github",
    title: "GitHub",
    desc: "github.com/bflows",
    link: "https://github.com/bflows",
    Icon: IconBrandGithub,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    desc: "linkedin.com/in/billyflowers",
    link: "https://www.linkedin.com/in/billyflowers",
    Icon: IconBrandLinkedin,
  },
];

export const statistics: Record<LinkId, Statistic> = {
  portfolio: {
    clicks: 93,
    changePercent: 7,
    history: [42, 44, 46, 48, 50, 52, 55],
  },
  resume: {
    clicks: 76,
    changePercent: 4,
    history: [5, 5, 6, 6, 6, 7, 7],
  },
  github: {
    clicks: 41,
    changePercent: 1,
    history: [1, 2, 1, 2, 1, 2, 2],
  },
  linkedin: {
    clicks: 12,
    changePercent: -3,
    history: [1, 1, 1, 1, 1, 1, 0],
  },
};