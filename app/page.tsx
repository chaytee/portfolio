import Logo from "@/components/Logo";
import SkillRadar from "@/components/SkillRadar";
import WorkSlider from "@/components/WorkSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      {" "}
      <Logo />
      <main className="container flex min-h-screen w-full max-w-3xl flex-col items-center justify-between dark:bg-black sm:items-start m-auto">
        {" "}
        <div className="section-intro w-full">
          <p className="text-base text-center mb-8">
            島原千聖のポートフォリオを
            <br />
            ご覧いただきありがとうございます。
          </p>
          <p className="text-base mb-4">
            Web制作に7年以上携わり、近年は
            UI/UXデザインとフロントエンド開発を主軸に3年以上取り組んでいます。
          </p>
          <p className="text-base mb-4">
            企業案件ではUI/UX設計からフロントエンド実装までを担当し、
            個人案件では要件定義・進行管理を含むWebディレクションも経験しています。
          </p>
          <p className="text-base">
            人間中心設計（HCD）をベースに、ユーザー視点を重視した画面設計・改善を得意としています。
          </p>
          <SkillRadar />
        </div>
        <div className="section-works w-full bg_wide pt-40 md:pt-74">
          <WorkSlider />
        </div>
      </main>{" "}
    </div>
  );
}
