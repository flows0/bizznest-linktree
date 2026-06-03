import { type LucideIcon } from "lucide-react";

interface LinkCardProps {
  title: string;
  desc: string;
  link: string;
  Icon: LucideIcon;
}

export default function LinkCard({
  title,
  desc,
  link,
  Icon
}: LinkCardProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="py-5 px-6 rounded-2xl flex items-center gap-x-4 transition-all duration-300 ease-in-out group bg-brand900 focus:outline-none focus:border-none focus:ring-2 focus:ring-primary focus:ring-offset-brand950 focus:ring-offset-2">
      <Icon className="size-12 transition-colors duration-300 ease-in-out text-brand50 group-hover:text-primary" />
      <div className="flex flex-col gap-y-1">
        <h2 className="text-h6 font-bold transition-colors duration-300 ease-in-out text-brand50 group-hover:text-primary">
          {title}
        </h2>
        <p className="text-small text-brand400">
          {desc}
        </p>
      </div>
    </a>
  );
}