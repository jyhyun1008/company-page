import styles from "./page.module.css";
import Largetitle from '../../../components/Largetitle.js'

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="bannerimg">
        <img src="https://cdn.imweb.me/thumbnail/20200430/faa736710e495.jpg"></img>
        <h1>INTRODUCTION</h1>
      </div>
      <div id="bannermargin"></div>
      <Largetitle subtitle='기 / 업 / 소 / 개' title='Mission & Vision' />
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.littlewidth}>
            <h1>Mission</h1>
          </div>
          <div className={styles.flexgrow}>
            <ul>
                <li>가장 두려워해야 할 것은 스스로 약속한 사항을 지키지 못하는 것이다</li>
                <li>기회가 오지 않음을 두려워하지 말고 준비가 되어 있지 않음을 두려워하라</li>
                <li>실수하지 않는 사람이 되는 것보다 포기하지 않는 사람이 되는 것이 중요하다</li>
            </ul>
          </div>
        </main>
        <main className={styles.main}>
          <div className={styles.littlewidth}>
            <h1>Our Vision</h1>
          </div>
          <div className={styles.flexgrow}>
            <div>
                <h2>Adress</h2>
                <p>장애라는 틀에서 벗어나 문 밖의 세상으로 나아가라</p>
                <h2>Back Swing</h2>
                <p>몸과 마음을 다해 정확하고 부드럽게 시작하라</p>
                <h2>Top of Swing</h2>
                <p>기회는 날 기다려주지 않는다. 이제부터 시작하라</p>
                <h2>Down Swing</h2>
                <p>도전하라</p>
                <h2>Impact</h2>
                <p>강하면 부러진다. 늘 침착하라</p>
                <h2>Follow Through</h2>
                <p>다르다는 글자를 하나가 되게 하라</p>
                <h2>Finish</h2>
                <p>함께 만들어 가는 사회의 일원으로 꿈을 향해 소통할 수 있게 나아가라</p>
            </div>
          </div>
        </main>
        <div className={styles.golfbackground}></div>
      </fullwidth>
    </div>
  );
}