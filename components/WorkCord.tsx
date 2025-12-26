import Image from 'next/image'

export type Work = {
  no: string
  title: string
  description: string
  role: string[]
  tech: string[]
  focus?: string[]
  thumbnail?: string
  liveUrl?: string
  confidential?: boolean
}

type Props = {
  work: Work
}

export function WorkCard({ work }: Props) {
  return (
    <article className="work-card">
      <p className="thumbnail">{work.thumbnail && (
        <Image
          src={work.thumbnail}
          alt={work.title}
          width={234}
          height={498}
        />
      )}</p>

      <h3>{work.title}</h3>
      <p>{work.description}</p>

      <ul>
        <li><strong>Role:</strong> {work.role.join(', ')}</li>
        <li><strong>Tech:</strong> {work.tech.join(', ')}</li>
        {work.focus && (
          <li><strong>Focus:</strong> {work.focus.join(', ')}</li>
        )}
      </ul>

      <div className="actions">
        {work.confidential ? (
          <span className="confidential">Confidential</span>
        ) : (
          <>
            {work.liveUrl && (
              <a href={work.liveUrl} target="_blank">View Live</a>
            )}
          </>
        )}
      </div>
    </article>
  )
}
