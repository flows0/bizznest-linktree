import { cardLinks, statistics } from "../constants";
import Card from "../../../components/ui/Card";

export default function CardList({
  showStats
}: {
  showStats: boolean
}) {
  return (
    <div className="mt-8 max-w-lg mx-auto px-6 flex flex-col gap-y-2">
      {cardLinks.map(({ id, title, desc, link, Icon }) => {
        const stats = statistics[id];

        return (
          <Card
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
