import Image from "next/image";
import styles from "./page.module.css";
import Largetitle from '../../../components/Largetitle.js'

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="bannerimg"><img src="https://cdn.imweb.me/thumbnail/20200430/faa736710e495.jpg"></img></div>
      <div id="bannermargin"></div>
      <Largetitle subtitle='기 / 업 / 소 / 개' title='About JS Golf Agency' />
      <fullwidth className={styles.fullwidth}>
        <div className={styles.ceobackground}></div>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h2>Joyous Support,</h2>
            <h1>JS Golf Academy</h1>
            <div>
                <p>현재 대한민국 골프는 실력 있는 프로들의 활약으로 선진국을 능가하는 스포츠로 자리매김하였으며,<br />한국 골프 산업은 물론 대중들의 골프에 대한 관심 역시 날로 증가하고 있습니다.</p>
                <p>이미 한국의 골프 활동 인구는 600만 명을 넘어섰습니다.<br />이에 JS 골프 에이전시는 미국이나 일본과는 다르게 젊은 층이 유입되고 있는 한국의 골프 시장에 맞춰<br />조기 골프 교육을 접할 수 있도록 아카데미를 운영하고, 아마추어 선수들의 양성에 힘쓰고 있습니다.</p>        
                <p>2015년 12월 설립된 JS 골프 에이전시는 현재까지 국내/외로 활발한 활동을 이어가고 있는, 국내 최고의 시스템을 구축한 골프 에이전시입니다.<br />JS 골프 에이전시에서는 태국에 위치한 스카이밸리 골프장을 운영하고 있으며,<br />국내/외 골프 투어 관련 사업 및 JS 매니지먼트와 JS 골프 아카데미를 운영합니다.</p>         
                <p>JS 매니지먼트는 소속 프로의 입단과 활동에 힘쓰고 있으며, 2018년 JS 골프 에이전시에서 인수, 재 오픈한 부여 백제 트레이닝 센터를 기반으로<br />골프장은 물론이고 여가 시설과 기초 체력을 위한 휘트니스 센터, 재활 센터 및 피팅샵, 식당 등을 운영, <br />소속 프로와 아카데미 학생들을 위한 숙박, 숙식 제공과 체계적인 식단 관리 및 담당 코치의 스케줄 관리를 받게 됩니다.</p>
                <p>특히, 골프 아카데미에서는 초, 중, 고등학생들을 대상으로 *** 감독을 필두로 하는<br />최고의 실력과 경험을 겸비한 전문코치 및 트레이너들의 지도를 받을 수 있도록 체계적이고 전문화된 아카데미 커리큘럼을 계획하고<br />주니어 및 아마추어 선수뿐만 아니라 프로 골퍼 양성을 목표로 집중하고 있습니다.</p>
                <p>이와 관련하여 JS 골프 에이전시에서는 골프부 학교와 연계를 맺어 전학 및 진학 문제를 해결하고, <br />학생들의 안전 및 불편 해소를 위해 통학버스와 대회 차량을 운행하는 등 최고의 시스템을 제공합니다.</p>
                <p>JS 골프 에이전시 골프 아카데미 학생들은 JS 골프 에이전시에서 기획하고 주최하는 국내/외 대회는 물론, <br />JS 골프 에이전시 소속만이 누릴 수 있는 다양한 대회의 출전 자격을 갖게 됨과 동시에<br />예선에서 탈락하더라도 본선에 진출할 수 있는 최대의 특전으로 '3부 투어 본선자격'의 특혜를 누릴 수 있습니다.</p>
                <p>JS 골프 에이전시는 이처럼 노력하고 더 나아가 지역사회의 허브 역할을 도모하여<br />지속적인 후원과 대회 개최를 통해 새로운 도약을 목표로 선도하겠습니다.</p>
              </div>
          </div>
          <div className={styles.signature}>
            <p>JS Golf Agency</p>
            <p>CEO <span>육 종 승</span></p>
            <p><img src="https://cdn.imweb.me/upload/S202004039b79029ae4742/b0b779acf97fe.png" /></p>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}
