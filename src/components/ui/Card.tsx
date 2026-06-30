import type { CardProps } from "../../types/card";
import { formatPercentage } from "../../util/formatPercentage";
import Linechart from "../../modules/analytics/components/Linechart";
import { MousePointerClick, TrendingDown, TrendingUp } from "lucide-react";

export default function Card({
  title,
  desc,
  clicks,
  changePercent,
  history,
  showStats,
  link,
  Icon,
}: CardProps) {
  const positive = changePercent >= 0;
  const TrendIcon = positive ? TrendingUp : TrendingDown;
  const trendColor = positive ? "text-[#3AF86D]" : "text-[#F83A3A]";

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="py-5 px-6 rounded-2xl flex items-center gap-x-4 transition-all duration-300 ease-in-out group bg-brand900 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand50 focus:ring-offset-brand950 focus:ring-offset-2"
    >
      <Icon className="size-12 shrink-0 transition-colors duration-300 ease-in-out text-brand200 group-hover:text-brand50 group-focus:text-brand50" />
      <div className="flex flex-1 min-w-0 flex-col gap-y-1">
        <h2 className="text-h6 font-bold transition-colors duration-300 ease-in-out text-brand200 group-hover:text-brand50 group-focus:text-brand50">
          {title}
        </h2>
        {showStats ? (
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1 text-brand400">
              <MousePointerClick className="size-4.75" />
              <p className="text-small">
                {clicks.toLocaleString()}
              </p>
            </div>
            <div className={`flex items-center gap-x-1 ${trendColor}`}>
              <TrendIcon className="size-4.75" />
              <p className="text-small">
                {formatPercentage(changePercent)}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-small text-brand400">
            {desc}
          </p>
        )}
      </div>
      {showStats && (
        <Linechart
          data={history}
          positive={positive}
        />
      )}
    </a>
  );
}
