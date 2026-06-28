import { ChartLine } from "lucide-react";

export default function ToggleStats({ 
  onToggle, 
  showStats 
}: { 
  onToggle: () => void, 
  showStats: boolean 
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle stats"
      className={`absolute p-2 rounded-full w-fit ring-2 cursor-pointer group transition-all duration-300 ease-in-out ${showStats ? "bg-brand800 ring-brand50" : "bg-brand800 ring-brand600"} focus:outline-none focus:border-none focus:ring-brand50 focus:ring-offset-2 focus:ring-offset-brand950 hover:-translate-x-0.5 hover:translate-y-0.5`}
    >
      <ChartLine className={`size-5.25 transition-colors duration-300 ease-in-out ${showStats ? "text-brand50" : "text-brand400 group-hover:text-brand200 group-focus:text-brand200"}`} />
    </button>
  );
}