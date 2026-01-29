"use client";
import Image from "next/image";
import OrbitCircle from "@/components/VisionSection/OrbitCircle";
import styles from "./VisionSection.module.scss";

export default function VisionSection() {
  return (
    <article className={`${styles.visionSection} pt-40 w-full`}>
      <h2 className={`${styles.visionSection__title}`}><Image src="/images/title_vision.svg" alt="Vision" width={242} height={66} className="mx-auto" /></h2>
      <p className={`${styles.visionSection__subtitle} text-center`}>人の感性に寄り添う<br className="block md:hidden" />ものづくり</p>
      <div className={`${styles.uxOrbit} flex flex-col md:flex-row justify-center mb-4 md:block`}>
      <OrbitCircle label="体験" color="#FFB6B6" />
      <OrbitCircle label="価値観" color="#AEE3DD" />
      <OrbitCircle label="配慮" color="#EEDC8F" />
      </div>
      <p className={`${styles.visionSection__text} text-[clamp(1.4rem,4vw,1.6rem)] text-center mb-4`}>ユーザーの行動や利用状況を前提に仮説を立て、<br />
      <span className="text-[clamp(1.6rem,4vw,1.8rem)] font-bold md:block">「迷いを生まない導線や操作フローを設計・実装すること」</span>を重視しています。</p>
      <p className={`${styles.visionSection__text} text-[clamp(1.4rem,4vw,1.6rem)] md:text-center mb-4`}> 単なる見た目の調整ではなく、<br className="hidden md:block"/>
      情報の優先順位・状態変化・操作結果が直感的に理解できる<br className="hidden md:block"/>UI設計を意識しています。</p>
      <p className={`${styles.visionSection__text} text-[clamp(1.4rem,4vw,1.6rem)] md:text-center`}>また、開発側の視点も重要だと考えています。<br />
      要件・工数・優先度を整理した上で、実装負荷とUX改善効果のバランスを踏まえた提案を行ってきました。限られた条件の中でも、ユーザー体験を最大化できる実装を選択することを意識しています。</p>
    </article>
  )
}