import "./globals.css";
import "./navbar.css";
import "./aboutbar.css";

export const metadata = {
  title: "제이에스 골프 에이전시",
  description: "백제 제이에스 컴퍼니/백제 골프 트레이닝 센터/골프 아카데미",
  openGraph: {
    url: "http://www.jsga.kr/",
    title: "제이에스 골프 에이전시",
    description: "백제 제이에스 컴퍼니/백제 골프 트레이닝 센터/골프 아카데미",
    images: ["https://cdn.imweb.me/upload/S202004039b79029ae4742/e4b86a6b2d348.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div id="navbar">
          <div id="logo">
            <a href="/"><img src="https://cdn.imweb.me/upload/S202004039b79029ae4742/1583c8a401770.png" /></a>
          </div>
        </div>
        <div id="aboutbar">
          <div>
            <div id="about-left" className="bargroup">
              <div className="about-item">
                <a href="/about">About YS</a>
                <div className="dropdown">
                  <a href="/">About JS</a>
                  <a href="/">Vision & Mission</a>
                  <a href="/">History</a>
                </div>
              </div>
              <div className="about-item">
                <a href="/works">Business</a>
                <div className="dropdown">
                  <a href="/">Golf</a>
                  <a href="/">Community Center</a>
                  <a href="/">Screen Golf</a>
                  <a href="/">Franchise</a>
                  <a href="/">Management</a>
                </div>
              </div>
            </div>
            <div id="about-right" className="bargroup">
              <div className="about-item">
                <a href="/goods">Community</a>
                <div className="dropdown">
                <a href="/">News</a>
                <a href="/">Event</a>
                <a href="/">Gallery</a>
                <a href="/">Communication</a>
                </div>
              </div>
              <div className="about-item">
                <a href="/subscribe">Contact</a>
              </div>
            </div>
          </div>
        </div>
        {children}
        <footer>
          <div>
            <p><b>(주)육성그룹</b> / 대표 육종승</p>
            <p>E-mail: jsga2020@gmail.com</p>
            <p>Tel: 1660-3532 | Fax: 042-544-3533</p>
            <p>Adr: 세종특별자치시 도움1로 7, 204호</p>
            <p> </p>
            <p>©2020, JS Golf Agency All Rights Reserved.</p>
            <p>개인정보 보호 책임자: 404kill@naver.com</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
