"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  label: string;
  value: number;
  title: string;
  description: string;
};

const skills: Skill[] = [
  { label: "Frontend", value: 85, title:'フロントエンド',description: "Vue / Nuxt.js を用いた UI 実装が得意です" },
  { label: "UI/UX", value: 80, title:'UI UXデザイン', description: "ユーザー導線を意識した画面設計ができます" },
  { label: "HTML/CSS", value: 90, title: 'コーディング', description: "保守性を考慮したスタイル設計ができます" },
  { label: "Architecture", value: 75, title: '設計・構造化', description: "ディレクトリ設計・責務分離を考えられます" },
  { label: "Performance", value: 70, title: 'パフォーマンス・品質', description: "UX を損なわない範囲で、パフォーマンスを最適化する実装ができます" },
];

const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 90;

function getPoint(angle: number, value: number, progress: number) {
  const r = (RADIUS * value * progress) / 100;
  const rad = (Math.PI * 2 * angle) / skills.length - Math.PI / 2;
  return {
    x: CENTER + r * Math.cos(rad),
    y: CENTER + r * Math.sin(rad),
  };
}

export default function SkillRadar() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState<Skill | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(1);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = skills
    .map((skill, i) => {
      const p = getPoint(i, skill.value, progress);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <div ref={ref} className="relative flex justify-center">
      <svg width={SIZE} height={SIZE}>
        {/* 軸 */}
        {skills.map((_, i) => {
          const p = getPoint(i, 100, 1);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke="#e5e7eb"
            />
          );
        })}

        {/* スキルエリア */}
        <polygon
          points={points}
          fill="#FFE0E6"
          stroke="#FFA4B5"
          strokeWidth="2"
          style={{
            transition: "all 0.8s ease-out",
          }}
        />

        {/* 点 + ホバー */}
        {skills.map((skill, i) => {
          const p = getPoint(i, skill.value, progress);
          const labelPos = getPoint(i, 115, 1);

          return (
            <g key={skill.label}>
              <circle
                cx={p.x}
                cy={p.y}
                r={5}
                fill="#FFA4B5"
                onMouseEnter={() => setHovered(skill)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer hover-dot"
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                className="fill-gray-700 text-sm"
              >
                {skill.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ホバー説明 */}
      {hovered && (
        <div className="absolute bottom-[-60px] rounded bg-gray-900 text-white px-3 py-1 text-sm">
          <p>{hovered.title}</p>
          <p>
          {hovered.description}</p>
        </div>
      )}
    </div>
  );
}
