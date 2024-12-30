import "./globals.css";
import "./navbar.css";
import "./aboutbar.css";

export const metadata = {
  title: "제이에스 골프 에이전시",
  description: "제이에스 골프 에이전시",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div id="navbar">
          <div id="logo">
            <img src="https://cdn.imweb.me/upload/S202004039b79029ae4742/1583c8a401770.png" />
          </div>
        </div>
        <div id="aboutbar">
          <div id="about-left">
            <div className="about-item"><a href="/about">About YS</a></div>
            <div className="about-item"><a href="/works">Business</a></div>
          </div>
          <div id="about-right">
            <div className="about-item"><a href="/goods">Community</a></div>
            <div className="about-item"><a href="/subscribe">Contact</a></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
