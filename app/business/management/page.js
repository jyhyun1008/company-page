import Image from "next/image";
import styles from "./page.module.css";
import Largetitle from '../../../components/Largetitle.js'

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="bannerimg">
        <img id="bannerimg-gray" src="https://cdn.imweb.me/thumbnail/20200430/9af9c5f5469bd.jpg"></img>
        <h1>BUSINESS</h1>
      </div>
      <div id="bannermargin"></div>
      <Largetitle subtitle='사 / 업 / 소 / 개' title='Management' />
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.littlewidth}>
            <img src="https://cdn.imweb.me/thumbnail/20200504/fbe937200d66a.jpg"></img>
          </div>
          <div className={styles.flexgrow}>
            <div>
                <p>한국의 골프 시장의 성장에 따라 한국 골프 시장은 다양한 장르로의 발전을 예고하고 있습니다.<br />골프 아카데미의 발전으로 조기 골프 교육의 관심이 높아지고, 기존 선수들의 활발한 활동 또한 주목받기 시작했습니다.</p>
                <p>이전까지 한국에는 전문적인 골프 매니지먼트사들이 많지 않았으며, 골프 매니지먼트 사업이 활성화되지 못한 것이 현실이었습니다.<br />골프가 대중화되고 있는 만큼 체계적인 시스템을 갖추어야 하는 시점에서 JS의 매니지먼트 사업은 한국의 전문적인 매니지먼트사의 등장이라 할 수 있습니다.</p>
                <p>JS에서는 대회 개최, 이벤트 유치뿐 아니라 JS 매니지먼트 사업을 확장시켜 각 지역구를 대표하는 아마추어 선수의 입단을 추진합니다.</p>
                <p>JS 매니지먼트에서는 소속 선수의 대회 출전 시 골프 용품 및 대회 상금을 후원하며, 선수는 활발한 대회 출전을 통해 JS 매니지먼트의 홍보대사 역할을 하게 됩니다.</p>
            </div>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}