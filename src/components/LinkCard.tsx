import {
  MousePointerClick,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Sparkline from "./Sparkline";
import { formatChangePercent } from "../data/linkStats";

interface LinkCardProps {
  title: string;
  desc: string;
  clicks: number;
  changePercent: number;
  history: number[];
  showStats: boolean;
  link: string;
  Icon: LucideIcon;
}

export default function LinkCard({
  title,
  desc,
  clicks,
  changePercent,
  history,
  showStats,
  link,
  Icon,
}: LinkCardProps) {
  const positive = changePercent >= 0;
  const TrendIcon = positive ? TrendingUp : TrendingDown;
  const trendColor = positive ? "text-[#3AF86D]" : "text-[#F83A3A]";

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="py-5 px-6 rounded-2xl flex items-center gap-x-4 transition-all duration-300 ease-in-out group bg-brand900 focus:outline-none focus:border-none focus:ring-2 focus:ring-primary focus:ring-offset-brand950 focus:ring-offset-2"
    >
      <Icon className="size-12 shrink-0 transition-colors duration-300 ease-in-out text-brand50 group-hover:text-primary" />
      <div className="flex flex-1 min-w-0 flex-col gap-y-1">
        <h2 className="text-h6 font-bold transition-colors duration-300 ease-in-out text-brand50 group-hover:text-primary">
          {title}
        </h2>
        {showStats ? (
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1 text-brand400">
              <MousePointerClick className="size-4.75" />
              <p className="text-small">{clicks.toLocaleString()}</p>
            </div>
            <div className={`flex items-center gap-x-1 ${trendColor}`}>
              <TrendIcon className="size-4.75" />
              <p className="text-small">{formatChangePercent(changePercent)}</p>
            </div>
          </div>
        ) : (
          <p className="text-small text-brand400">{desc}</p>
        )}
      </div>
      {showStats && (
        <Sparkline data={history} positive={positive} />
      )}
    </a>
  );
}
