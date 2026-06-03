export type LinkId = "portfolio" | "resume" | "github" | "linkedin";

export interface LinkStat {
  clicks: number;
  changePercent: number;
  /** Daily click counts for the last 7 days (oldest → newest). */
  history: number[];
}

export const linkStats: Record<LinkId, LinkStat> = {
  portfolio: {
    clicks: 93,
    changePercent: 7,
    history: [42, 44, 46, 48, 50, 52, 55],
  },
  resume: {
    clicks: 76,
    changePercent: 4,
    history: [5, 5, 6, 6, 6, 7, 7],
  },
  github: {
    clicks: 41,
    changePercent: 1,
    history: [1, 2, 1, 2, 1, 2, 2],
  },
  linkedin: {
    clicks: 12,
    changePercent: -3,
    history: [1, 1, 1, 1, 1, 1, 0],
  },
};

export function formatChangePercent(percent: number): string {
  return `${Math.abs(percent)}%`;
}
