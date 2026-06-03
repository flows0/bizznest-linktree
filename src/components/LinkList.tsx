import { FileUser, LayoutGrid } from "lucide-react";
import LinkCard from "./LinkCard";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function LinkList({ showStats }: { showStats: boolean }) {
  return (
    <div className="mt-8 max-w-lg mx-auto px-6 flex flex-col gap-y-2">
      <LinkCard 
        Icon={LayoutGrid} 
        title="Portfolio"
        desc="billyf-portfolio.vercel.app"
        clicks="853"
        percentage="29%"
        showStats={showStats}
        link="https://billyf-portfolio.vercel.app"
      />
      <LinkCard 
        Icon={FileUser} 
        title="Resume"
        desc="/files/billy-flowers-resume.pdf"
        clicks="89"
        percentage="17%"
        showStats={showStats}
        link="https://billyf-portfolio.vercel.app/files/billy-flowers-resume.pdf"
      />
      <LinkCard 
        Icon={IconBrandGithub}
        title="GitHub"
        desc="github.com/bflows"
        clicks="24"
        percentage="5%"
        showStats={showStats}
        link="https://github.com/bflows"
      />
      <LinkCard 
        Icon={IconBrandLinkedin} 
        title="LinkedIn"
        desc="linkedin.com/in/billyflowers"
        clicks="16"
        percentage="1%"
        showStats={showStats}
        link="https://www.linkedin.com/in/billyflowers"
      />
    </div>
  );
}