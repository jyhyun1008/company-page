import "./globals.css";
import "./navbar.css";
import "./aboutbar.css";
import Menubar from "../components/Menubar.js"

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
      <head>
        <link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </head>
      <body>
        <div id="navbar">
          <div id="logo">
            <a href="/"><img src="https://cdn.imweb.me/upload/S202004039b79029ae4742/1583c8a401770.png" /></a>
          </div>
        </div>
        <Menubar />
        {children}
        <footer>
          <div>
            <p><b>(주)육성그룹</b> | 대표 육종승</p>
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
