import { FileUser, LayoutGrid } from "lucide-react";
import LinkCard from "./LinkCard";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { linkStats, type LinkId } from "../data/linkStats";

const links: {
  id: LinkId;
  title: string;
  desc: string;
  link: string;
  Icon: typeof LayoutGrid;
}[] = [
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

export default function LinkList({ showStats }: { showStats: boolean }) {
  return (
    <div className="mt-8 max-w-lg mx-auto px-6 flex flex-col gap-y-2">
      {links.map(({ id, title, desc, link, Icon }) => {
        const stats = linkStats[id];
        return (
          <LinkCard
            key={id}
            Icon={Icon}
            title={title}
            desc={desc}
            clicks={stats.clicks}
            changePercent={stats.changePercent}
            history={stats.history}
            showStats={showStats}
            link={link}
          />
        );
      })}
    </div>
  );
}
