import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="bannerimg"><img src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg"></img></div>
      <div id="bannermargin"></div>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h1>JS Golf Academy</h1>
            <div>
              <p>저희 JS 골프 아카데미는 지속적인 도전과 실패를 통해 성공을 이뤄내는 가치를 사회 구성원들에게 전달하고자 합니다.</p>
              <p>'우리' 라는 공동의 이념으로, 백제 트레이닝 센터 내에서 전문 골프 선수들을 육성하고, 발달장애인 골프 선수들에게 후원을 제공하며, 아파트 커뮤니티의 운영과 커피숍 프랜차이즈 사업 등 다양한 프로젝트를 통해 큰 꿈을 실현하고자 노력하고 있습니다.</p>
              <p>"가장 두려워해야 할 것은 스스로 약속한 것을 지키는 것입니다."</p>        
              <p>"기회가 오지 않음을 두려워하지 말고, 준비가 되어 있지 않음을 두려워하십시오."</p>         
              <p>"실수하지 않는 사람이 되는 것보다 포기하지 않는 사람이 되는 것이 중요합니다."</p>
              <p>이러한 미션을 가슴에 품고, 지속적인 노력을 통해 성공을 이루는 데 최선을 다할 것입니다.</p>
              </div>
              <ctas className={styles.ctas}>
                <a href="/about" className={styles.primary}>더보기</a>
              </ctas>
          </div>
          <div className={styles.littlewidth}>
            <img src="https://images.pexels.com/photos/1325751/pexels-photo-1325751.jpeg"></img>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className="littlewidth">
            <img src="/books.jpeg"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>작품 읽기</h1>
            <div>
              <p>온라인 업로드되는 작품 일부를 무료로 공개하고 있습니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/works" className={styles.primary}>더보기</a>
              </ctas>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className={styles.flexgrow}>
            <h1>굿즈 구매</h1>
            <div>
              <p>각 텔러리움의 세계관이 담긴 굿즈들을 만나볼 수 있습니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/goods" className={styles.primary}>더보기</a>
              </ctas>
          </div>
          <div className="littlewidth">
            <img src="/goods.webp"></img>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className="littlewidth">
            <img src="/zine.jpeg"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>소책자 구독</h1>
            <div>
              <p>매월 세 명분의 텔러리움이 녹아 있는 작고 얇은 소책자를 배송해드려요.</p>
              <p>아주 가끔씩은, 일러스트 굿즈나 수공예 아이템을 받을 수도 있답니다.</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/subscribe" className={styles.primary}>더보기</a>
              </ctas>
          </div>
        </main>
      </fullwidth>
    </div>
  );
}
