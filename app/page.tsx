import FirstView from "@/components/FirstView/FirstView";
import SkillSection from "@/components/SkillSection/SkillSection";
import VisionSection from "@/components/VisionSection/VisionSection";
import ProfileSection from "@/components/ProfileSection/profileSection";
import WorksSection  from "@/components/WorkSection/WorksSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {" "}
      <FirstView />
      <main className="container flex min-h-screen w-full flex-col items-center justify-between dark:bg-black sm:items-start m-auto">
        {" "}
        <div className="section-intro w-full pt-20">
          <p className="text-[clamp(1.6rem,4vw,2rem)] text-center mb-8">
            ポートフォリオを
            <br />
            ご覧いただきありがとうございます。
          </p>
          <p className="text-[clamp(1.4rem,4vw,1.6rem)] mb-12 text-center">
          フロントエンドエンジニアとして、UX設計の意図を理解し、<br className="hidden md:block" />仮説検証から画面実装までを担う「UXエンジニア」的な役割を担ってきました。
          </p>
          <div className="rollMsg">
            <p className="text-[clamp(1.4rem,4vw,1.6rem)] mb-4">
            Web制作に7年以上携わり、前半3年はコーポレートサイトを中心としたWebデザイン・制作を経験し、近年はUI/UXデザインとフロントエンド開発を主軸に3年以上取り組んでいます。<br />
            デザイン意図やUXを理解した上でフロントエンド実装に落とし込む役割を担い、UI/UX設計と実装の橋渡しを行ってきました。
            </p>
            <p className="text-[clamp(1.4rem,4vw,1.6rem)] mb-4">
            個人案件ではクライアント折衝、要件定義、進行管理を含むWebディレクションを担当しています。
            </p>
            <p className="text-[clamp(1.4rem,4vw,1.6rem)]">
            HCD（人間中心設計）をベースに、ユーザー課題の整理から画面設計・プロトタイピング・改善まで一貫して関わり、「何を作るか」と「どう実装するか」をつなぎながら、プロダクトを前に進めることを強みとしています。
            </p>
          </div>
        </div>
        <SkillSection />
        <VisionSection />
        <ProfileSection />
        <WorksSection />
      </main>{" "}
      <p className="copy text-center mt-18">@2026 chisato shimahara</p>
    </div>
  );
}
