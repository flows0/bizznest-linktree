import { ChartLine } from "lucide-react";

export default function ToggleStatsBtn({ onToggle, showStats }: { onToggle: () => void, showStats: boolean }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`absolute top-5 right-6 p-2 rounded-full w-fit cursor-pointer transition-colors duration-300 ease-in-out ${showStats ? "bg-brand800 ring-2 ring-brand700" : "bg-brand950"} focus:outline-none focus:border-none focus:ring-2 focus:ring-primary focus:ring-offset-brand950 focus:ring-offset-2`}
    >
      <ChartLine className="size-5.25 text-brand200" />
    </button>
  );
}