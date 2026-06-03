# BizzNest Linktree (Technical Assessment)

A Linktree-style page in React displaying my profile and social links with one JavaScript feature that brings it to life.

## JavaScript Feature

**Link analytics display** — a stats toggle (chart icon in the top-right) switches each link card from its URL description to a compact analytics view.

When stats are on:

- **Total clicks** — per-link click count for the last 7 days, formatted with locale separators (e.g. `93`).
- **Change percentage** — week-over-week trend with an up/down icon; green for positive, red for negative.
- **Sparkline** — a small SVG line chart of daily clicks over the same 7-day window; stroke color matches the trend direction.

The header tag also swaps from location to “Total clicks (last 7 days)” so the page context matches the cards.

### Why this feature

Linktree pages are often static lists of URLs. A lightweight analytics layer makes the page feel more like a product dashboard and shows how each destination performs at a glance without leaving the profile view.

### Tricky bits

- **Sparkline scaling** — daily values are mapped to SVG coordinates using min/max normalization so flat or noisy series still read clearly; a zero range falls back to `1` to avoid dividing by zero.
- **Dual card modes** — one `LinkCard` toggles between description and stats via `showStats`, keeping layout stable while swapping middle content and conditionally rendering the sparkline on the right.
- **Trend styling** — change percent, icon, and sparkline stroke stay in sync through a single `positive` flag derived from `changePercent >= 0`.

### With more time

- Implement real click tracking (e.g. `localStorage` or a small API) instead of mock data in `src/data/linkStats.ts`.
- Compute change % from `history` rather than storing it separately.
- Animate sparkline draw-in and support empty or single-point histories.

The mock data lives in `src/data/linkStats.ts` (clicks, `changePercent`, and 7-day `history` per link).

## Environment Setup

### 1.) Clone GitHub repository.

```
git clone https://github.com/bflows/bizznest-linktree.git
```

### 2.) Install npm packages in root folder. `/bizznest-linktree`
```
cd bizznest-linktree/
npm install
```

### 3.) Run development script.
```
npm run dev
```

### 4.) Click the localhost link in the terminal to view the project live.