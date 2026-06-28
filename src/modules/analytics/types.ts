import { LayoutGrid } from "lucide-react";

export type LinkId = "portfolio" | "resume" | "github" | "linkedin";

export interface LinkProps {
  id: LinkId;
  title: string;
  desc: string;
  link: string;
  Icon: typeof LayoutGrid;
}

export interface Statistic {
  clicks: number;
  changePercent: number;

  /** Daily click counts for the last 7 days (oldest → newest). */
  history: number[];
}