import Image from "next/image";
import WorkPastProjects from "./WorkPastProjects";
import styles from "./WorkSection.module.scss";

export default function WorksSection() {
  return (
    <div className={`${styles.worksSection} w-full pt-40`}>
      <h2 className={`${styles.worksSection__title} text-center`}><Image src="/images/title_works.svg" alt="Works" width={221} height={66} className="mx-auto" /></h2>
      <article className={styles.nowBox}>
        <div className="mb-8"><Image src="/images/text_now_title.png" alt="2018-2022" width={212} height={33} /></div>
        <p className="text-[clamp(1.4rem,4vw,1.4rem)]">UI/UXデザインからフロントエンド実装まで一貫して手がけたWeb作品に加え、
        情報設計・伝達設計の観点から構成したスライド資料も掲載しています。<br />
        スライド制作では、ユーザー（読み手）が理解しやすい導線や情報の優先順位を意識し、
        UI/UXデザインと同じ考え方で設計しています。</p>
        <div className={styles["btn-section"]}>
          <a href="/works/works-uiux.pdf" target="_blank" className={styles["btn-section__link"]}>
            <span className="btn-section__link-text">UIUX設計<br />
            フロントエンド</span>
          </a>
          <a href="/works/works-slide.pdf" target="_blank" className={`${styles["btn-section__link"]} ${styles.slide}`}>
            <span className="btn-section__link-text">slide design</span>
          </a>
        </div>
      </article>
      <WorkPastProjects />
    </div>
  )
}