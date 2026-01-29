import Image from "next/image";
import styles from "./WorkSection.module.scss";

export default function WorkPastProjects() {
  return (
    <article className={styles.pastProjects}>
     <dl className={styles["past-box"]}>
      <dt><Image src="/images/text_past_title.png" alt="2018-2022" width={212} height={33} /></dt>
      <dd>
        <p className="text-[clamp(1.4rem,4vw,1.4rem)]">自身のコーポレートサイトや自信が手がけた作品。</p>
        <ul>
          <li className="text-[clamp(1.4rem,4vw,1.4rem)]">
            <span className="title">role.</span>UI/UX Design / Frontend
          </li>
          <li className="text-[clamp(1.4rem,4vw,1.4rem)]">
            <span className="title">tech.</span>wordpress・Illustrator・photoshop・XD
          </li>
          <li className="text-[clamp(1.4rem,4vw,1.4rem)]">
            <span className="title">Scope.</span>クライアント折衝、デザイン、実装
          </li>
        </ul>
      </dd>
     </dl>
     <div className={styles["btn-wrap"]}>
      <a href="/regacy/index.html" target="_blank" rel="noopener noreferrer" className={styles["btn-link"]}>作品を見る</a>
    </div>
    </article>
  )
}