import { FileUser, LayoutGrid } from "lucide-react";
import LinkCard from "./LinkCard";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function LinkList() {
  return (
    <div className="mt-8 max-w-lg mx-auto px-6 flex flex-col gap-y-2">
      <LinkCard 
        Icon={LayoutGrid} 
        title="Portfolio"
        desc="billyf-portfolio.vercel.app" 
        link="https://billyf-portfolio.vercel.app"
      />
      <LinkCard 
        Icon={FileUser} 
        title="Resume"
        desc="/files/billy-flowers-resume.pdf" 
        link="https://billyf-portfolio.vercel.app/files/billy-flowers-resume.pdf"
      />
      <LinkCard 
        Icon={IconBrandGithub}
        title="GitHub"
        desc="github.com/bflows" 
        link="https://github.com/bflows"
      />
      <LinkCard 
        Icon={IconBrandLinkedin} 
        title="LinkedIn"
        desc="linkedin.com/in/billyflowers" 
        link="https://www.linkedin.com/in/billyflowers"
      />
    </div>
  );
}