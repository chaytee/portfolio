import Image from "next/image";
import SkillRadar from "@/components/SkillRadar";

export function SkillSection() {
  return (
    <article className="skill-section">
      <h2 className="skill-section__title text-center"><Image src="/images/title_skills.svg" alt="Skills" width={213} height={66} /></h2>
      <SkillRadar />
      <div className="skill-section__list-container">
        <h3 className="skill-section__list-item-title">UIUXデザイン</h3>
        <dl className="skill-section__list-item">
          <dt>デザイン・UI/UX　3年以上</dt>
          <dd>
            <ul>
              <li>ユーザーリサーチ</li>
              <li>ワイヤーフレーム</li>
              <li>プロトタイピング</li>
              <li>情報設計</li>
              <li>デザインシステム</li>
              <li>人間中心設計を元にしたプロジェクト立ち上げ</li>
            </ul>
          </dd>
        </dl>
        <dl className="skill-section__list-item">
          <dt>Webデザイン　5年以上</dt>
          <dd>
            <ul>
              <li>LP作成</li>
              <li>バナー作成</li>
              <li>ロゴデザイン</li>
              <li>イラスト作成</li>
              <li>ディレクション</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className="skill-section__list-container">
        <h3 className="skill-section__list-item-title">フロントエンド開発</h3>
        <dl className="skill-section__list-item">
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
        <dl className="skill-section__list-item">
          <dt>WordPress　5年以上</dt>
          <dd>
            <ul>
              <li>WordPressカスタマイズ</li>
              <li>WordPressテーマカスタマイズ</li>
              <li>WordPressプラグイン開発</li>
              <li>WordPressテーマ開発</li>
              <li>WordPressテーマデザイン</li>
            </ul>
          </dd>
        </dl>
        <dl className="skill-section__list-item">
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
      </div>
        <div className="skill-section__list-container">
        <h3 className="skill-section__list-item-title">バックエンド開発・その他</h3>
        <dl className="skill-section__list-item">
          <dt>バックエンド開発</dt>
          <dd>
            <ul>
              <li>Node.js 　3年以上</li>
              <li>Express 　3年以上</li>
              <li>Ruby on Rails 　1年以上</li>
              <li>PHP 　1年以上</li>
              <li>Laravel 　1年以上</li>
            </ul>
          </dd>
        </dl>
        <dl className="skill-section__list-item">
          <dt>データベース</dt>
          <dd>
            <ul>
              <li>MySQL 　3年以上</li>
              <li>Firebase 　3年以上</li>
              <li>Supabase 　1年未満</li>
            </ul>
          </dd>
        </dl>
        <dl className="skill-section__list-item">
          <dt>その他</dt>
          <dd>
            <ul>
              <li>Git 　5年以上</li>
              <li>GitHub 　5年以上</li>
              <li>microCMS　API連携</li>
              <li>Zendesk　API連携</li>
              <li>Slack　API連携</li>
              <li>HTMLメール(デザイン/コーディング)</li>
              <li>SNS連携(Facebook/Twitter/Instagram/YouTube)</li>
              <li>コミュニケーションツール（Slack / Notion </li>
              <li>ptengineでのABテスト</li>
              <li>LステップでのABテスト実施</li>
              <li>Go スクレイピング</li>
            </ul>
          </dd>
        </dl>
      </div>
    </article>
  )
}