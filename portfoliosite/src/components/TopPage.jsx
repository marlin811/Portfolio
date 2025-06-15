// src/components/TopPage.jsx

import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImgSlider from './Slider';
import './toppage.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


function TopPage() {
  const sliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6900,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1.5
      }
    }
  ]
};


  return (
    <main>
      <Header />
      {/* フロントセクション */}
      <div className="front">
        <img src="/images/front.jpeg" alt="front" />
        <p>MRLN<br />PORTFORIO</p>
      </div>

        <ImgSlider />
        
      <hr />

      {/* About Me セクション */}
      <h2><a id="aboutme">About me</a></h2>
      <div className="aabout">
        <div className="about">
          <p>
            高校三年時に初めてプログラミングに触れ興味を持つ。
            <br />R、JavaScript、C、HTML、CSSを習得中。今年Pythonの学習を開始。
            <br />現在は基本情報技術者試験に向け勉強中。（3月の受験ではA695,B530で不合格）
            <br />セキュリティへの興味は以前からあったものの、はっきりと自覚したのは今年の3月。
            <br />自身のカードが第三者による不正利用がされたことによる。
            <br />窃盗でも盗難でもなく、サイトからの情報漏洩と思われる。
            <br />また、現在サークル活動にてウェブアプリの開発に参加中。
          </p>
        </div>
      </div>

      <hr />

      {/* Contact セクション */}
      <h2>contact</h2>
      <form method="get" action="result.html">
        <div>
          <p>お名前<br />
            <input type="text" name="name" placeholder="佐藤　花子" />
          </p>
        </div>
        <div>
          <p>メールアドレス<br />
            <input type="text" name="mail" placeholder="example@gmail.com" />
          </p>
        </div>
        <div>
          <p>ご感想<br />
            <textarea name="message" placeholder="文字数制限なし！" />
          </p>
        </div>
        <div className="zemi">
          ページは見やすいですか？
          <input type="radio" name="y/n" value="yes" defaultChecked />はい
          <input type="radio" name="y/n" value="no" />いいえ
        </div>
        <div>
          <input type="submit" name="submit" value="送信" />
        </div>
      </form>

      <hr />

      {/* 布教セクション */}
      <h2>紹介コーナー</h2>
      <div className="hukyou">
        <p>
          最近感動した動画『【検証】東大生なら急に海外に放置されても大丈夫説【そんなわけあるか】』<br />
          人は学問をバラバラに学習しているのではなく、全てその人の知恵として脳に蓄積されていくのだと思った。<br />
          これまでに学んだことを脳内で関連づけて、そのプロセスを視聴者に説明することは決して簡単に真似できることではない。<br />
          ましてや、異国の地でリラックスできていない状態で、ここまで高速に脳が回転すること自体、手放しで尊敬に値する。<br />
        </p>
        <div className="tube">
          <iframe width="560" height="315"
           src="https://www.youtube.com/embed/k0mE0FPWQ2A?si=bI39AntTFQidkw9c" title="YouTube video player"
           frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <hr />
      <Footer />
    </main>
  );
}

export default TopPage;
