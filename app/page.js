import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="bannerimg"><img src="https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg"></img></div>
      <div id="bannermargin"></div>
      <fullwidth className={styles.fullwidth}>
        <main className={styles.main}>
          <div className="littlewidth">
            <img src="https://cdn.imweb.me/thumbnail/20230717/b03eb3912c8be.jpg"></img>
          </div>
          <div className={styles.flexgrow}>
            <h1>KLPGA 신 비 선수</h1>
            <div>
              <p>JS Golf Agency는 꾸준한 후원 활동으로 선수의 능력을 파악하고 길러내며, 선수가 더욱이 자신의 실력을 발휘할 수 있도록 올바른 이정표가 되어 주고 있습니다. 그 중 우수한 수상 경력을 가진 KLPGA 소속 신 비 선수를 자세히 만나 보세요.</p>
              <p><b>수상 경력</b></p>
              <ul>
                <li>2020 파워풀엑스 점프튜어 9차전 우승</li>
                <li>2018 한국중고골프연맹 제29회 회장배 준우승</li>
                <li>2014 제11회 한국초등학교골프연맹 회장배 전국 학생 골프대회 우승</li>
              </ul>
            </div>
              <ctas className={styles.ctas}>
                <a href="/works" className={styles.primary}>더보기</a>
              </ctas>
          </div>
        </main>
      </fullwidth>
      <fullwidth className={styles.fullwidth}>
        <main2 className={styles.main2}>
            <h1>베스트 스크린 골프장</h1>
            <gallery className={styles.gallery}>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/9c94b59e605f7.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/12e67ce81c204.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/bd1537a7bfd71.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/95bef63fa6e78.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/7dae8d8fcd59b.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/9d83f43fdd1c5.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240321/bcea66fd30b36.jpeg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240530/49d9f417d0533.jpeg" />
              </div>
            </gallery>
            <ctas className={styles.ctas}>
              <a href="/works" className={styles.primary}>더보기</a>
            </ctas>
        </main2>
      </fullwidth>
      <div className={styles.heading}>
        <p>찾아가는 24시간 골프구조대</p>
        <h1>GOLF119</h1>
      </div>
      <fullwidth className={styles.fullwidth}>
        <main2 className={styles.main2}>
            <iframe className="youtube" src="https://www.youtube.com/embed/9C3773tK2Ys?si=Gl_Klf-QGqoih5yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <gallery className={styles.gallery2}>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240424/bc0a898fb3905.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240424/5564ecdad8bd7.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240424/5da612c9d26d3.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240424/899c257095a19.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20240424/6fa9063ce2b38.jpg" />
              </div>
            </gallery>
            <ctas className={styles.ctas}>
              <a href="/works" className={styles.primary}>더보기</a>
            </ctas>
        </main2>
      </fullwidth>
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
          <div className={styles.midwidth}> 
            <iframe className="youtube" src="https://www.youtube.com/embed/mSZGlyVqDo8?si=Gl_Klf-QGqoih5yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.flexgrow}>
            <h1>백제 CC 골프 트레이닝 센터</h1>
            <div>
              <p>충남 부여군 은산면 충절로 3734-82</p>
            </div>
              <ctas className={styles.ctas}>
                <a href="/works" className={styles.primary}>더보기</a>
              </ctas>
          </div>
        </main>
        <main2 className={styles.main2}>
            <gallery className={styles.gallery3}>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20211208/c39b6f2f24946.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20211208/0418b23edd7d4.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20211208/ea3c43c189c9e.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20211208/0be95fec60274.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20211208/056f78bc7d7d7.jpg" />
              </div>
              <div>
                <img src="https://cdn.imweb.me/thumbnail/20211208/71faae8df1843.jpg" />
              </div>
            </gallery>
        </main2>
      </fullwidth>
    </div>
  );
}
