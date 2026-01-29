import Image from "next/image";

export default function ProfileSection(){
  return(
    <article className="pt-40 w-fulls mx-auto">
      <h2 className=""><Image src="/images/title_profile.svg" alt="Vision" width={267} height={66} className="mx-auto mb-20" /></h2>
      <dl>
        <dt className="flex flex-col md:flex-row justify-center items-center mb-20"><Image src="/images/icon_my.png" alt="Vision" width={100} height={100} className="mb-8 md:mr-16 md:mb-0" /><span className="text-[clamp(2.2rem,4vw,2.4rem)]">Chisato Shimahara</span></dt>
        <dd>
          <h3 className="text-[clamp(1.8rem,4vw,2rem)] font-bold text-center mb-8">UI/UXの意図を理解し、仮説検証から実装・改善までを<br className="hidden md:block"/>一気通貫で担う<br className="md:hidden"/>UX志向フロントエンドエンジニア</h3>
          <p className="text-[clamp(1.6rem,4vw,1.8rem)] text-center">Web制作会社・事業会社・業務委託を通じて、<br />
          BtoC / BtoBプロダクトのUI改善に携わる。</p>
        </dd>
      </dl>
    </article>
  )
}