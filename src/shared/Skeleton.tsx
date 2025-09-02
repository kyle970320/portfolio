export default function SkeletonView() {
  return (
    <div className="w-full p-6">
      <ShimmerStyles />
      <div className="space-y-3">
        {/* Short intro line */}
        <Line width="18%" />
        {/* Full lines */}
        <Line width="100%" />
        <Line width="100%" />
        {/* Ending shorter line */}
        <Line width="82%" />
      </div>
    </div>
  );
}

function Line({
  width = "100%",
  height = 14,
}: {
  width?: string;
  height?: number;
}) {
  return (
    <div
      className="skeleton rounded-full bg-gray-500"
      style={{ width, height }}
      aria-hidden
    />
  );
}

function ShimmerStyles() {
  return (
    <style>{`
.skeleton { position: relative; overflow: hidden; }
.skeleton::after {
content: "";
position: absolute; inset: 0;
transform: translateX(-100%);
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
animation: skeleton-shimmer 1.2s infinite;
}
@keyframes skeleton-shimmer { to { transform: translateX(100%); } }
@media (prefers-reduced-motion: reduce) {
.skeleton::after { animation: none; }
}
`}</style>
  );
}

// Optional: variant component matching the screenshot exactly
export function LinesSkeletonCompact() {
  return (
    <div className="w-full bg-white p-4">
      <ShimmerStyles />
      <div className="space-y-2.5">
        <Line width="14%" height={12} />
        <Line width="100%" height={12} />
        <Line width="100%" height={12} />
        <Line width="78%" height={12} />
      </div>
    </div>
  );
}
