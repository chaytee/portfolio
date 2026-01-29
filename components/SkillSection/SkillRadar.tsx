"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SkillSection.module.scss";

type Skill = {
  label: string;
  value: number;
  title: string;
  description: string;
};

const skills: Skill[] = [
  { label: "Frontend", value: 95, title:'フロントエンド',description: "Vue / Nuxt.js を用いた UI 実装が得意です" },
  { label: "UI/UX", value: 80, title:'UI UXデザイン', description: "ユーザー導線を意識した画面設計ができます" },
  { label: "Negotiation", value: 85, title: '顧客折衝', description: "背景を踏まえ要望に対して適切な提案ができます" },
  { label: "Architecture", value: 75, title: '設計・構造化', description: "ディレクトリ設計・責務分離を考えられます" },
  { label: "Quality", value: 90, title: '品質', description: "UX を損なわない範囲で、パフォーマンスを最適化する実装ができます" },
];

const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = 90;

function getPoint(angle: number, value: number, progress: number) {
  const r = (RADIUS * value * progress) / 100;
  const rad = (Math.PI * 2 * angle) / skills.length - Math.PI / 2;
  return {
    x: Math.round(CENTER + r * Math.cos(rad)),
    y: Math.round(CENTER + r * Math.sin(rad)),
  };
}

export default function SkillRadar() {

  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  // 初期表示で説明を出して「押せる/ホバーできる」ことを明確にする
  const [activeSkill, setActiveSkill] = useState<Skill>(() => skills[0]);

  useEffect(() => {
    // domが描画されるまで
  if (!ref.current) return;


  const observer = new IntersectionObserver(
  ([entry]) => {
  if (entry.isIntersecting) {
  setProgress(1);
  observer.disconnect();
  }
  },
  //40% 以上要素が画面に入ったらコールバックを実行
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
    <div ref={ref} className="relative flex justify-center pb-40">
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
          const isActive = activeSkill.label === skill.label;

          return (
            <g key={skill.label}>
              <circle
                cx={p.x}
                cy={p.y}
                r={isActive ? 8 : 6}
                fill="#FFA4B5"
                stroke={isActive ? "#ffffff" : "transparent"}
                strokeWidth={isActive ? 2 : 0}
                onMouseEnter={() => setActiveSkill(skill)}
                onFocus={() => setActiveSkill(skill)}
                tabIndex={0}
                className={`cursor-pointer ${styles.hoverDot} ${isActive ? styles.activeDot : ""}`}
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                className="fill-gray-700 text-[clamp(1.2rem,4vw,1.4rem)]"
              >
                {skill.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ホバー説明 */}
      {activeSkill && (
        <div className={styles.descriptionCard}>
          <p className={styles.descriptionCard__title}>{activeSkill.title}</p>
          <p className={styles.descriptionCard__txt}>
          {activeSkill.description}</p>
        </div>
      )}
    </div>
  );
}
