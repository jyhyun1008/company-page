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
      <Largetitle subtitle='사 / 업 / 소 / 개' title='Screen Golf Simulator' />
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.littlewidth}>
            <img src="https://cdn.imweb.me/thumbnail/20200825/c37031e38dd26.png"></img>
          </div>
          <div className={styles.flexgrow}>
            <div>
                <p>타석 스크린은 필드 라운드 못지 않게 전망이 밝을 것으로 보입니다.</p>
                <p>골프 대중화로 스크린을 찾아가서 연습하고 교제하는 골프 문화가 활성화되는 가운데 아파트 커뮤니티 센터 내의 골프 연습장을 활용한다면,<br />바쁜 시간을 내어 외부로 나갈 일 없이 이웃과의 소통은 물론 연습도 더불어 함께 하며<br />쉽게 결제할 수 있는 시스템으로 앞으로의 비전이 매우 큽니다.</p>
                <p>JS와 엑스페론의 협업으로 이루어지는 본 사업은 다양한 서비스를 제공하기 위해 노력하고 있습니다. <br />JS가 구축한 네트워크를 통해 1:1 수업을 매칭해 주는 시스템이 대표적인 에입니다.<br />경험과 실력을 겸비한 현직 프로들이 타석 스크린이 설치된 장소에서 레슨을 진행하거나 원격으로 코칭을 진행합니다. </p>
                <p>미세먼지 등과 같은 환경 오염으로 외부 활동이 어려울 시를 대비해 실내 운동이 대중화되어 가고 있는 것처럼,<br />타석 스크린 역시 시간과 건강, 그리고 재미를 찾는 현대인에게 꼭 필요한 시스템이라 생각됩니다.</p>
                <p>JS는 이 시대의 상황에 맞추어 사용자의 입장에서 고민하고, 함께 할 수 있는 스포츠를 만드는 데에 기여하고 있습니다.</p>
            </div>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}