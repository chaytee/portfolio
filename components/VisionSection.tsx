import Image from "next/image";

export function VisionSection() {
  return (
    <article className="vision-section">
      <h2 className="vision-section__title text-center"><Image src="/images/title_vision.svg" alt="Vision" width={242} height={66} /></h2>
      <p className="vision-section__subtitle text-center">人の感性に寄り添うものづくり</p>
      <p><Image src="/images/vision_cercle.png" alt="体験-何も迷いがない/価値観-本質に気づく/思いやり-使う人×作る人" width={605} height={172} /></p>
      <p className="vision-section__text text-center">使う人の感情や状況を想像し、「共感される体験」をデザインで
      実現することが重要だと考えています。</p>
      <p className="vision-section__text text-center"> 単に見た目を整えるだけでなく、使う人が「自分に合っている」
      と感じられるようなUI設計を大切にしています。</p>
      <p className="vision-section__text text-center">また、作る方にも配慮が必要だと感じています。見積もりに対して優先順位を確認し
      その中でユーザーが最もベストな体験を得られるような提案をしていきたいと考えています。</p>
    </article>
  )
}