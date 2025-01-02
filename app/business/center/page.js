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
      <Largetitle subtitle='사 / 업 / 소 / 개' title='Community Center' />
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <div>
                <p>요즘 같은 현대 사회에서 운동은 선택이 아닌 필수로 자리잡고 있습니다.</p>
                <p>골프를 전문으로 하는 프로나 학생이 아니더라도 기초 체력의 증가는 사람의 삶을 좀 더 이롭고 건강하게 만듭니다. 종류에 상관 없이 나에게 맞는 운동 하나만으로도 삶의 만족도와 질이 달라질 수 있습니다.</p>
                <p>운동에 무지했던 가까운 나의 이웃이 쉽게 운동에 접근하여 <b>삶에 활력을 불어넣었으면</b> 하는 취지에서 시작된 아파트 단지 내 휘트니스 사업이 어느덧 3개 지점으로 확장하게 되었습니다.</p>        
                <p>대전 도안 아파트와 관저 아파트 단지 내 휘트니스 센터는 <b>골프 연습장, 헬스장, GX룸, 배드민턴장, 탁구장 등</b>으로 구성되어 있고, <b>카페 공간</b>도 함께 운영 중입니다.<br /></p>         
                <p>GX룸을 제외한 모든 공간을 자유롭게 이용 가능하며, 골프와 배드민턴은 신청 시 전문 프로에게 지도를 받을 수 있습니다.<br />수업 시에만 오픈되는 GX룸의 경우 그룹 PT, 요가, 댄스 수업을 신청할 수 있으며, 전문 지도자가 수업을 진행합니다.</p>
              </div>
          </div>
          <div className={styles.littlewidth}>
            <img src="https://cdn.imweb.me/thumbnail/20200825/130f9681546ed.png"></img>
          </div>
        </main>
        <main2 className={styles.main2}>
            <gallery className={styles.gallery2}>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20200825/7a0f897019614.png" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20200825/aa2f3b129dc50.png" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20200825/7d3268c1fa33d.png" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20200825/c3de06a1555e2.png" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20200825/162142c6ccb8c.png" />
              </div>
            </gallery>
        </main2>
      </fullwidth>
    </div>
  );
}