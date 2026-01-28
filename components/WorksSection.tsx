import Image from "next/image";
import WorkPastProjects from "@/components/WorkPastProjects";

export default function WorksSection() {
  return (
    <article className="works-section w-full pt-18">
      <h2 className="works-section__title text-center"><Image src="/images/title_works.svg" alt="Works" width={221} height={66} /></h2>
      <div className="btn-section">
        <a href="/works" className="btn-section__link ui">
          <span className="btn-section__link-text">UIUX設計<br />
          フロントエンド</span>
        </a>
        <a href="/works" className="btn-section__link slide">
          <span className="btn-section__link-text">slide design</span>
        </a>
      </div>
      <div className="works-section__content">
        <WorkPastProjects />
      </div>
    </article>
  )
}