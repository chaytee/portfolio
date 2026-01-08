import Logo from "@/components/Logo";
import Image from "next/image";

export default function FirstView() {
  return (
    <div className="first-view">
      <Logo />
      <div className="cercle1"><Image src="/images/img_cercle_01.png" width={118} height={116} alt="" /></div>
      <div className="cercle2"><Image src="/images/img_cercle_02.png" width={159} height={127} alt="" /></div>
      <div className="cercle3"><Image src="/images/img_cercle_03.png" width={147} height={269} alt="" /></div>
      <div className="cercle4"><Image src="/images/img_cercle_04.png" width={191} height={201} alt="" /></div>
      <div className="first-view__bg">
        <Image src="/images/top_bg.png" width={1157} height={598} alt="" />
      </div>
    </div>
  )
}