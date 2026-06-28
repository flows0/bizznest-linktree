import { type LucideIcon } from "lucide-react";

export interface CardProps {
  title: string;
  desc: string;
  clicks: number;
  changePercent: number;
  history: number[];
  showStats: boolean;
  link: string;
  Icon: LucideIcon;
}