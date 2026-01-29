import Image from "next/image";
import WorkPastProjects from "./WorkPastProjects";
import styles from "./WorkSection.module.scss";

export default function WorksSection() {
  return (
    <article className={`${styles.worksSection} w-full pt-40`}>
      <h2 className={`${styles.worksSection__title} text-center`}><Image src="/images/title_works.svg" alt="Works" width={221} height={66} className="mx-auto" /></h2>
      <p className="text-[clamp(1.8rem,4vw,1.8rem)] text-center mb-10">直近の作品はこちらからご覧ください</p>
      <div className={styles["btn-section"]}>
        <a href="https://drive.google.com/file/d/1jlZKchwc24Q8JWfYblf0oGE5edMWMjFf/view?usp=drive_link" target="_blank" className={styles["btn-section__link"]}>
          <span className="btn-section__link-text">UIUX設計<br />
          フロントエンド</span>
        </a>
        <a href="/works" className={`${styles["btn-section__link"]} ${styles.slide}`}>
          <span className="btn-section__link-text">slide design</span>
        </a>
      </div>
      <div className="works-section__content">
        <WorkPastProjects />
      </div>
    </article>
  )
}