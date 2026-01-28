"use client";
import Image from "next/image";
import OrbitCircle from "@/components/OrbitCircle";

export default function VisionSection() {
  return (
    <article className="vision-section pt-18 w-full">
      <h2 className="vision-section__title text-center"><Image src="/images/title_vision.svg" alt="Vision" width={242} height={66} /></h2>
      <p className="vision-section__subtitle text-center">人の感性に寄り添うものづくり</p>
      <div style={{ display: "flex", gap: "48px", justifyContent: "center" }}>
      <OrbitCircle label="体験" color="#FFB6B6" />
      <OrbitCircle label="価値観" color="#AEE3DD" />
      <OrbitCircle label="配慮" color="#EEDC8F" />
      </div>
      <p className="vision-section__text text-center text-center">ユーザーの行動や利用状況を前提に仮説を立て、<br />
      <span className="big">「迷いを生まない導線や操作フローを設計・実装すること」</span>を重視しています。</p>
      <p className="vision-section__text text-center text-center"> 単なる見た目の調整ではなく、<br />
      情報の優先順位・状態変化・操作結果が直感的に理解できるUI設計を意識しています。</p>
      <p className="vision-section__text text-center">また、開発側の視点も重要だと考えています。<br />
      要件・工数・優先度を整理した上で、実装負荷とUX改善効果のバランスを踏まえた提案を行ってきました。限られた条件の中でも、ユーザー体験を最大化できる実装を選択することを意識しています。</p>
    </article>
  )
}