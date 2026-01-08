import Image from "next/image";
import { WorkPastProjects } from "@/components/WorkPastProjects";

export function WorksSection() {
  return (
    <article className="works-section">
      <h2 className="works-section__title text-center"><Image src="/images/title_works.svg" alt="Works" width={221} height={66} /></h2>
      <div className="btn-section">
        <a href="/works" className="btn-section__link">
          <span className="btn-section__link-text">Works</span>
        </a>
        <a href="/works" className="btn-section__link">
          <span className="btn-section__link-text">Works</span>
        </a>
      </div>
      <div className="works-section__content">
        <WorkPastProjects />
      </div>
    </article>
  )
}