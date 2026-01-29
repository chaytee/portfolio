'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import WorkCard from './WorkCord'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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

export const featuredWorks: Work[] = [
  {
    no: '1',
    title: '婚活未来診断',
    description: 'Nuxt.jsで構築したポートフォリオサイト。',
    role: ['Frontend', 'UI Design'],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    focus: ['Performance', 'Component Design'],
    liveUrl: 'https://example.com',
    thumbnail: '/images/img_works02.png',
  },
  {
    no: '2',
    title: 'Portfolio Website',
    description: 'Next.jsで構築したポートフォリオサイト。',
    role: ['フロントエンドエンジニア', 'UI UXデザイン'],
    tech: ['Nuxt.js', 'TypeScript', 'Tailwind', 'Vercel'],
    focus: ['Performance', 'Component Design'],
    liveUrl: 'https://example.com',
    thumbnail: '/images/img_works02.png',
  },
  {
    no: '3',
    title: 'Portfolio Website',
    description: 'Next.jsで構築したポートフォリオサイト。',
    role: ['Frontend', 'UI Design'],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    focus: ['Performance', 'Component Design'],
    liveUrl: 'https://example.com',
    thumbnail: '/images/img_works02.png',
  },
  {
    no: '4',
    title: 'Portfolio Website',
    description: 'Next.jsで構築したポートフォリオサイト。',
    role: ['Frontend', 'UI Design'],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    focus: ['Performance', 'Component Design'],
    liveUrl: 'https://example.com',
    thumbnail: '/images/img_works02.png',
  },
]

export default function WorkSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={1.2}
      centeredSlides={true}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
    {featuredWorks.map(work => (
      <SwiperSlide key={work.no}>
        <WorkCard work={work} />
      </SwiperSlide>
    ))}
    </Swiper>
  )
}
