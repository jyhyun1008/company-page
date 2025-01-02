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
      <Largetitle subtitle='사 / 업 / 소 / 개' title='Franchise' />
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h1>Restaurant</h1>
            <div>
                <h3>백제 트레이닝센터 식당</h3>
                <p>JS 골프 에이전시 소속 프로들과 아카데미 학생들에게 건강한 한 끼를 대접하기 위해<br />부여 백제 트레이닝센터 내 식당을 JS 사업이 직접 운영합니다.</p>
                <p>골프장 방문객도 이용할 수 있는 이 식당은 뷔페 형식으로 다양한 메뉴를 제공합니다.<br />실력 있는 영양사와 조리사가 상주하여 맛과 균형 잡힌 영양 식단을 구성하고, <br />직원을 대상으로 한 정기적인 위생 교육과 건강검진을 실시하며 조리도구와 집기의 위생을 철저히 관리하여, 건강하고 위생적인 식사를 제공하고 쾌적한 식사 환경을 유지합니다.</p>        
                <p>인공 조미료 대신 천연 조미료를 사용해 맛에 풍미를 더하고<br />대중성 있고 다양한 음식 및 계절 메뉴 등을 준비하고 있으며,<br />모든 식재료에 대한 원산지를 표시하는 등 위생과 건강, 그리고 투명성을 중시하여 운영합니다.</p>
              </div>
          </div>
          <div className={styles.littlewidth}>
            <img src="https://cdn.imweb.me/thumbnail/20200430/2a4783d58fc40.jpg"></img>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.littlewidth}>
            <img src="https://cdn.imweb.me/thumbnail/20200825/8d23c483d6dcf.png"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>Cafe</h1>
            <div>
                <h3>휘트니스센터 카페</h3>
                <p>JS 골프 에이전시에서는 도안 휘트니스센터 다드림1호점을 시작으로, 도안 북카페 다드림2호점, 관저 휘트니스센터 다드림3호점까지의 카페를 운영하고 있습니다.</p>
                <p>아파트와 커뮤니티 센터 내에 입점하여 주민들과 JS소속 프로, 아카데미 학생들, 그리고 골프장 이용객을 대상으로 커피 뿐 아니라 다양한 음료와 브런치 메뉴 등을 제공하고 있습니다.</p>
                <p>1호점 본점에서는 창업 문의를 담당하고 있고, 2호점 북카페에서는 장르의 다양성을 높여 책을 읽을 수 있는 공간과 아이들의 공간을 함께 마련하였습니다.<br />갤러리 형식으로 꾸며진 3호점은 볼거리와 함께 안락하고 편안한 휴식처를 제공하여 이용객들의 만족도를 높이고 있습니다.</p>
              </div>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}
