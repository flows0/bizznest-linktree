interface SparklineProps {
  data: number[];
  positive: boolean;
  width?: number;
  height?: number;
}

export default function Sparkline({
  data,
  positive,
  width = 72,
  height = 32,
}: SparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const padding = 2;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  const points = data.map((value, i) => {
    const x = padding + (i / (data.length - 1)) * innerW;
    const y = padding + innerH - ((value - min) / range) * innerH;
    return `${x},${y}`;
  });

  const stroke = positive ? "#3AF86D" : "#F83A3A";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="shrink-0"
      aria-hidden="true"
    >
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points.join(" ")}
      />
    </svg>
  );
}
