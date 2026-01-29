import Image from "next/image";
import SkillRadar from "@/components/SkillSection/SkillRadar";
import styles from "./SkillSection.module.scss";

const {skillSection, listContainer} = styles;

export default function SkillSection() {
  return (
    <article className={`${skillSection} w-full pt-32`}>
      <h2 className={styles.skillSection__title}><Image src="/images/title_skills.svg" alt="Skills" width={213} height={66} className="mx-auto" /></h2>
      <SkillRadar />
      <div className={`${listContainer} mt-20`}>
        <h3 className={styles.listContainer__title}><Image src="/images/icon_star.svg" width={24} height={24} alt="" />UIUXデザイン</h3>
        <dl className={styles.listContainer__item}>
          <dt>デザイン・UI/UX　3年以上</dt>
          <dd>
            <ul className={styles.list}>
              <li>ユーザーリサーチ</li>
              <li>ワイヤーフレーム</li>
              <li>プロトタイピング</li>
              <li>情報設計</li>
              <li>デザインシステム</li>
              <li>人間中心設計を元にしたプロジェクト立ち上げ</li>
            </ul>
          </dd>
        </dl>
        <dl className={styles.listContainer__item}>
          <dt>Webデザイン　5年以上</dt>
          <dd>
            <ul className={styles.list}>
              <li>LP作成</li>
              <li>バナー作成</li>
              <li>ロゴデザイン</li>
              <li>イラスト作成</li>
              <li>ディレクション</li>
            </ul>
          </dd>
        </dl>
        <dl className={styles.listContainer__item}>
          <dt>デザインツール</dt>
          <dd>
            <ul className={styles.itemList}>
              <li><Image src="/images/icon_figma.png" alt="" width={40} height={40} /><span className="title">figma</span></li>
              <li><Image src="/images/icon_photoshop.png" alt="" width={40} height={40} /><span className="title">photoshop</span></li>
              <li><Image src="/images/icon_illust.png" alt="" width={40} height={40} /><span className="title">illustrator</span></li>
              <li><Image src="/images/icon_xd.png" alt="" width={40} height={40} /><span className="title">xd</span></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className={listContainer}>
        <h3 className={styles.listContainer__title}><Image src="/images/icon_star.svg" width={24} height={24} alt="" />フロントエンド開発</h3>
        <dl className={styles.listContainer__item}>
          <dt>HTML/CSS</dt>
          <dd>
            <ul>
              <li>HTML 　5年以上</li>
              <li>CSS 　5年以上</li>
              <li>JavaScript 　5年以上</li>
              <li>TypeScript 　3年以上</li>
            </ul>
          </dd>
        </dl>
        <dl className={styles.listContainer__item}>
          <dt>JavaScriptフレームワーク/ライブラリ</dt>
          <dd>
            <ul>
              <li>Nuxt.js 　3年以上</li>
              <li>Vue.js 　3年以上</li>
              <li>React 　1年以上</li>
              <li>Next.js 　1年以上</li>
              <li>Tailwind CSS 　3年以上</li>
              <li>Bootstrap 　3年以上</li>
              <li>jQuery 　5年以上</li>
            </ul>
          </dd>
        </dl>
        <dl className={styles.listContainer__item}>
          <dt>WordPress　5年以上</dt>
          <dd>
            <ul>
              <li>テーマカスタマイズ</li>
              <li>テーマカスタマイズ</li>
              <li>プラグイン開発</li>
              <li>テーマデザイン</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className={styles.listContainer}>
        <h3 className={styles.listContainer__title}><Image src="/images/icon_star.svg" width={24} height={24} alt="" />バックエンド開発・その他</h3>
        <dl className={styles.listContainer__item}>
          <dt>バックエンド開発</dt>
          <dd>
            <ul className={styles.list}>
              <li>Express 　3年以上</li>
              <li>Ruby on Rails 　1年以上</li>
              <li>PHP 　1年未満</li>
              <li>Laravel 　1年未満</li>
            </ul>
          </dd>
        </dl>
        <dl className={styles.listContainer__item}>
          <dt>データベース/インフラ</dt>
          <dd>
          <ul className={styles.list}>
              <li>MySQL　3年以上</li>
              <li>Firebase 　3年以上</li>
              <li>Supabase 　1年未満</li>
              <li>Gogle Cloud(Gcp) 　3年以上</li>
              <li>AWS 1年未満　※自己学習</li>
            </ul>
          </dd>
        </dl>
        <dl className={styles.listContainer__item}>
          <dt>その他</dt>
          <dd>
          <ul className={styles.list}>
              <li>GitHub 　5年以上</li>
              <li>microCMS　API連携</li>
              <li>Zendesk　API連携</li>
              <li>Slack　API連携</li>
              <li>HTMLメール(デザイン/コーディング)</li>
              <li>SNS連携(Facebook/Twitter/Instagram/YouTube)</li>
              <li>コミュニケーションツール（Slack / Notion）</li>
              <li>ptengineでのABテスト</li>
              <li>Lステップでのマーケ戦略・ABテスト実施</li>
              <li>Go スクレイピング</li>
            </ul>
          </dd>
        </dl>
      </div>
    </article>
  )
}