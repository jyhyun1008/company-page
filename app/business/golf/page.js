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
      <Largetitle subtitle='사 / 업 / 소 / 개' title='Golf' />
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h1>Golf</h1>
            <div className="mobiledisplay">
              <img src="/golf_2.png"></img>
            </div>
            <div>
                <p>현재 대한민국 골프는 실력 있는 프로들의 활약으로 선진국을 능가하는 스포츠로 자리매김하였으며, 한국 골프 산업은 물론 대중들의 골프에 대한 관심 역시 날로 증가하고 있습니다.</p>
                <p>이미 한국의 골프 활동 인구는 600만 명을 넘어섰습니다.<br />이에 JS 골프 에이전시는 미국이나 일본과는 다르게 젊은 층이 유입되고 있는 한국의 골프 시장에 맞춰 조기 골프 교육을 접할 수 있도록 아카데미를 운영하고, 아마추어 선수들의 양성에 힘쓰고 있습니다.</p>        
                <p>2015년 12월 설립된 JS 골프 에이전시는 현재까지 국내/외로 활발한 활동을 이어가고 있는, 국내 최고의 시스템을 구축한 골프 에이전시입니다.<br />국내/외 골프 투어 관련 사업 및 JS 매니지먼트와 JS 골프 아카데미뿐 아니라, 태국에 위치한 스카이밸리 골프장을 운영합니다.</p>         
                <p>JS 매니지먼트는 소속 프로의 입단과 활동에 힘쓰고 있으며, 2018년 JS 골프 에이전시에서 인수, 재 오픈한 부여 백제 트레이닝 센터를 기반으로 골프장은 물론이고 여가 시설과 기초 체력을 위한 휘트니스 센터, 재활 센터 및 피팅샵, 식당 등을 운영, 소속 프로와 아카데미 학생들을 위한 숙박, 숙식 제공과 체계적인 식단 관리 및 담당 코치의 스케줄 관리를 받게 됩니다.</p>
                <p>JS 골프 에이전시는 이처럼 노력하고 더 나아가 지역사회의 허브 역할을 도모하여<br />지속적인 후원과 대회 개최를 통해 새로운 도약을 목표로 선도하겠습니다.</p>
              </div>
          </div>
          <div className="littlewidth desktopdisplay">
            <img src="/golf_2.png"></img>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className="littlewidth desktopdisplay">
            <img src="https://cdn.imweb.me/thumbnail/20200430/732acc61e5e0d.jpg"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>Golf Club</h1>
            <div className="mobiledisplay">
              <img src="https://cdn.imweb.me/thumbnail/20200430/732acc61e5e0d.jpg"></img>
            </div>
            <div>
                <h3>조이어스 골프</h3>
                <p>조이어스 골프(Joyous Golf)는 <b>어린이와 청소년을 위한 프로그램</b>으로,<br />골프를 학습함으로써 이들의 소근육과 대근육을 발달시키고 체력을 향상시키는 데 초점을 두고 있습니다.<br />뿐만 아니라 골프 스윙에서의 균형 감각을 키움으로써 자연스러운 움직임을 유도하며, 학업 스트레스를 해소하고 집중력을 향상시키는 데에도 도움을 줍니다.</p>
                <h3>해피 골프</h3>
                <p>해피 골프는 <b>발달장애인을 위한 프로그램</b>으로,<br />발달장애인들의 골프에 대한 흥미를 유발하고 그들의 잠재된 재능을 찾아내기 위해 노력하고 있습니다.<br />이 프로그램은 맞춤형 커리큘럼과 레슨을 제공하여 해당 선수들이 골프 선수로 성장할 수 있도록 도와 주며, 이를 통해 건강한 사회 진출을 위한 역량을 키우는 데 목표를 두고 운영되고 있습니다.</p>
                <h3>JS 아마추어 골프</h3>
                <p>JS 아마추어 골프 프로그램은 지역구를 대표하는 <b>여성 아마추어 골프 선수</b>들로 구성되어 있습니다.<br />KMAGF 및 JS 골프 에이전시가 주관하는 골프 대회 뿐만 아니라 다양한 대회에 참가 자격을 얻게 되며, 대회 출전 시 골프 용품 및 상금은 JS 골프 에이전시에서 후원합니다.<br />이 아마추어 골프 선수들은 JS 매니지먼트와 혐력하여 JS 골프 에이전시의 홍보 담당 선수로 활동하게 됩니다.</p>
              </div>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}
