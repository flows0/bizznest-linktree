import { ChartLine } from "lucide-react";

export default function ToggleStatsBtn({ onToggle, showStats }: { onToggle: () => void, showStats: boolean }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`absolute top-5 right-6 p-2 rounded-full w-fit ring-2 cursor-pointer group transition-all duration-300 ease-in-out ${showStats ? "bg-brand800 ring-primary" : "bg-brand800 ring-brand600"} focus:outline-none focus:border-none focus:ring-primary focus:ring-offset-4 focus:ring-offset-brand950`}
    >
      <ChartLine className={`size-5.25 transition-colors duration-300 ease-in-out ${showStats ? "text-primary" : "text-brand400 group-hover:text-brand200 group-focus:text-brand200"}`} />
    </button>
  );
}