import Image from "next/image";

export default function WorkPastProjects() {
  return (
    <article className="past-projects">
     <dl className="past-box">
      <dt><Image src="/images/text_past_title.png" alt="2018-2022" width={212} height={33} /></dt>
      <dd>
        <p>自身のコーポレートサイトや自信が手がけた作品。</p>
        <ul>
          <li>
            <span className="title">role.</span>UI/UX Design / Frontend
          </li>
          <li>
            <span className="title">tech.</span>wordpress・Illustrator・photoshop・XD
          </li>
          <li>
            <span className="title">Scope.</span>クライアント折衝、デザイン、実装
          </li>
        </ul>
      </dd>
     </dl>
     <div className="btn-wrap"><button className="btn-link">作品を見る</button></div>
    </article>
  )
}