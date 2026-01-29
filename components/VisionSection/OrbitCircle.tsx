"use client";

import { useEffect, useState } from "react";


type Orbit = {
r: number;
duration: number;
delay: number;
direction: "normal" | "reverse";
opacity: number;
};


function createOrbits(): Orbit[] {
return Array.from({ length: 3 }).map((_, i) => ({
r: 70 + i * 4,
duration: 6 + Math.random() * 10,
delay: -Math.random() * 20,
direction: Math.random() > 0.5 ? "normal" : "reverse",
opacity: 0.45 - i * 0.12,
}));
}


export default function OrbitCircle({
label,
color,
}: {
label: string;
color: string;
}) {
// ✅ Client マウント後にだけ random 生成
const [orbits, setOrbits] = useState<Orbit[] | null>(() => {
  // Server-side: return null
  if (typeof window === 'undefined') return null;
  // Client-side: initialize with random values
  return createOrbits();
});


// ✅ SSR / hydration 中は描画しない
if (!orbits) return null;


return (
<svg width="180" height="180" viewBox="0 0 180 180" className="mx-auto">
<g transform="translate(90 90)">
{orbits.map((o, i) => (
<g
key={i}
style={{
animation: `spin ${o.duration}s linear infinite`,
animationDelay: `${o.delay}s`,
animationDirection: o.direction,
transformOrigin: "center",
}}
>
<circle
r={o.r}
fill="none"
stroke={color}
strokeWidth="1.5"
opacity={o.opacity}
/>
</g>
))}


{/* 中央円 */}
<circle r="58" fill={color} />


<text
textAnchor="middle"
y="6"
fontSize="20"
fontWeight="600"
fill="#fff"
>
{label}
</text>
</g>


<style jsx>{`
@keyframes spin {
0% {
transform: rotate(-10deg);
}
50% {
transform: rotate(10deg);
}
100% {
transform: rotate(-10deg);
}
}
`}</style>
</svg>
);
}