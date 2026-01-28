import Logo from "@/components/FirstView/Logo/Logo";
import Image from "next/image";
import styles from "./FirstView.module.scss";

const {firstView, cercle1, cercle2, cercle3, cercle4} = styles;

export default function FirstView() {
  return (
    <div className={firstView}>
      <Logo />
      <div className={cercle1}><Image src="/images/img_cercle_01.png" width={118} height={116} alt="" /></div>
      <div className={cercle2}><Image src="/images/img_cercle_02.png" width={159} height={127} alt="" /></div>
      <div className={cercle3}><Image src="/images/img_cercle_03.png" width={147} height={269} alt="" /></div>
      <div className={cercle4}><Image src="/images/img_cercle_04.png" width={191} height={201} alt="" /></div>
      <div className={styles.firstView__bg}>
        <Image src="/images/top_bg.png" width={1157} height={598} alt="" />
      </div>
    </div>
  )
}