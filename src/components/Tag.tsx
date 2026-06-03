import { MapPin, MousePointerClick } from "lucide-react"

export default function Tag({ showStats }: { showStats: boolean }) {
  const style = "flex items-center gap-x-1 text-brand400";
  return (
    <div className="mt-2">
      {showStats ? (
        <div className={style}>
          <MousePointerClick className="size-5.25" />
          <p className="text-small">Total clicks (last 7 days)</p>
        </div>
      ) : (
        <div className={style}>
          <MapPin className="size-5.25" />
          <p className="text-small">Modesto, CA</p>
        </div>
      )
      }
    </div >
  );
}