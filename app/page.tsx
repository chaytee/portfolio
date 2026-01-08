import FirstView from "@/components/FirstView";
import { SkillSection } from "@/components/SkillSection";
import { VisionSection } from "@/components/VisionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      {" "}
      <FirstView />
      <main className="container flex min-h-screen w-full max-w-3xl flex-col items-center justify-between dark:bg-black sm:items-start m-auto">
        {" "}
        <div className="section-intro w-full pt-18 pb-14">
          <p className="text-base text-center mb-8">
            島原千聖のポートフォリオを
            <br />
            ご覧いただきありがとうございます。
          </p>
          <p className="text-base mb-4 text-center">
            Web制作に7年以上携わり、<br />
            近年はUI/UXデザインとフロントエンド開発を主軸に3年以上取り組んでいます。
          </p>
          <p className="text-base mb-4 text-center">
            企業案件ではUI/UX設計からフロントエンド実装までを担当し、<br />
            個人案件では要件定義・進行管理を含むWebディレクションも経験しています。
          </p>
          <p className="text-base text-center mb-4">
            人間中心設計（HCD）をベースに、<br />
            ユーザー視点を重視した画面設計・改善を得意としています。
          </p>
        </div>
        <div className="section-skills w-full bg_wide pt">
          <SkillSection />
        </div>
        <div className="section-vision w-full bg_wide pt-18">
          <VisionSection />
        </div>
      </main>{" "}
    </div>
  );
}
