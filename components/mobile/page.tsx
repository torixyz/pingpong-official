"use client";
import Image from "next/image";
import "./page.scss";

export default function Mobile() {
  const toggleMenu = function () {
    const el = document.getElementById("js__mobile-header-box");
    if (el) {
      const hasClass = el.classList.contains("mobile__header-box--open");
      if (hasClass) {
        el.classList.remove("mobile__header-box--open");
      } else {
        el.classList.add("mobile__header-box--open");
      }
    }
  };
  const isOpen = function () {
    const el = document.getElementById("js__mobile-header-box");
    if (el) {
      return el.classList.contains("mobile__header-box--open");
    }
    return false;
  };
  const scrollToProduct = () => {
    const el = document.getElementById("js__product");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mobile__wrapper">
      <div className="mobile__header-box" id="js__mobile-header-box">
        <div className="mobile__header-box-1">
          <Image
            onClick={() => toggleMenu()}
            alt="product"
            width={269}
            height={94}
            src="/images/mobile/back.png"
          ></Image>
        </div>
        <div
          className="mobile__header-box-2"
          onClick={() => {
            if (!isOpen()) return;
            toggleMenu();
            scrollToProduct();
          }}
        >
          <Image
            alt="product"
            width={345}
            height={114}
            src="/images/mobile/products.png"
          ></Image>
        </div>
        <div
          className="mobile__header-box-3"
          onClick={() => {
            if (!isOpen()) return;
            window.open("/whitepaperV0.1.1.pdf", "_blank");
          }}
        >
          <Image
            alt="whitepaper"
            width={918}
            height={233}
            src="/images/mobile/whitepaper.png"
          ></Image>
        </div>
        <div
          className="mobile__header-box-4"
          onClick={() => {
            if (!isOpen()) return;
            window.open("https://twitter.com/pingpongbuild", "_blank");
          }}
        >
          <Image
            alt="twitter"
            width={282}
            height={114}
            src="/images/mobile/twitter-header.png"
          ></Image>
        </div>
        <div className="mobile__header-box-5"></div>
        <Image
          width={240}
          height={240}
          src="/images/mobile/logo.png"
          className="mobile__header-logo"
          alt="logo"
        ></Image>
        <Image
          width={592}
          height={100}
          src="/images/mobile/title.png"
          className="mobile__header-title"
          alt="title"
        ></Image>
        <div className="mobile__header-menu-box" onClick={() => toggleMenu()}>
          <div className="mobile__header-menu-item"></div>
          <div
            className="mobile__header-menu-item"
            style={{ top: "12px" }}
          ></div>
          <div
            className="mobile__header-menu-item"
            style={{ top: "24px" }}
          ></div>
        </div>
      </div>
      <div className="mobile__block-1">
        <Image
          width={594}
          height={602}
          className="mobile__block-1-bg-1"
          alt="bg"
          src="/images/mobile/bg1-1.png"
        ></Image>
        <Image
          width={332}
          height={644}
          className="mobile__block-1-bg-2"
          alt="bg"
          src="/images/mobile/bg1-2.png"
        ></Image>
        <Image
          onClick={() => {
            window.open("https://twitter.com/pingpongbuild", "_blank");
          }}
          width={675}
          height={174}
          className="mobile__block-1-button"
          alt="button"
          src="/images/mobile/button1.png"
        ></Image>
      </div>
      <div className="mobile__block-2" id="js__product">
        <Image
          width={740}
          height={1670}
          className="mobile__block-2-bg-1"
          alt="bg"
          src="/images/mobile/bg2.png"
        ></Image>
      </div>
      <div className="mobile__block-3">
        <Image
          width={740}
          height={1435}
          className="mobile__block-3-bg-1"
          alt="bg"
          src="/images/mobile/bg3.png"
        ></Image>
      </div>
      <div className="mobile__block-4">
        <Image
          width={674}
          height={488}
          className="mobile__block-4-bg-1"
          alt="bg"
          src="/images/mobile/bg4.png"
        ></Image>
        <div className="mobile__block-4-content-box">
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          &nbsp;&nbsp; We are a bunch of pro-human degens with work experience
          at tech giants, top DeFi protocols, super well-funded Layer1 chain,
          and crypto funds & trading prop shop, as founding team members, senior
          managers, and C-levels. Graduated from top universities etc etc.
        </div>
        <Image
          onClick={() => scrollTo("js__block-5")}
          width={308}
          height={80}
          className="mobile__block-4-button"
          alt="button"
          src="/images/mobile/button4.png"
        ></Image>
      </div>
      {/* block5 */}
      <div className="mobile__block-5" id="js__block-5">
        <Image
          width={674}
          height={488}
          className="mobile__block-5-bg-1"
          alt="bg"
          src="/images/mobile/bg5.png"
        ></Image>
        <div className="mobile__block-5-content-box">
          <div className="mobile__block-5-content">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However,
            please try to look beyond these labels on us. Labels are shortcuts
            to establishing authority and building blind trust, but they
            don&apos;t help us humans to bond meaningfully and your precious
            trust should not be given for free.
          </div>
        </div>
        <Image
          onClick={() => scrollTo("js__block-6")}
          width={308}
          height={80}
          className="mobile__block-5-button"
          alt="button"
          src="/images/mobile/button4.png"
        ></Image>
      </div>
      {/* block6 */}
      <div className="mobile__block-6" id="js__block-6">
        <Image
          width={674}
          height={488}
          className="mobile__block-6-bg-1"
          alt="bg"
          src="/images/mobile/bg6.png"
        ></Image>
        <div className="mobile__block-6-content-box">
          <div className="mobile__block-6-content-1">
            We encourage you to feel us,
          </div>
          <div className="mobile__block-6-content-2">
            feel our passion, through our products and words.
          </div>
          <div className="mobile__block-6-content-3">
            We are human-made and are cooking smth smth cool for humans, for you
            & your kids, for making democratizing the future of compute a dream
            come true.
          </div>
        </div>
        <Image
          onClick={() => scrollToTop()}
          width={556}
          height={120}
          className="mobile__block-6-button"
          alt="button"
          src="/images/mobile/button6.png"
        ></Image>
      </div>
      <div className="mobile__bottom-block">
        <Image
          width={481}
          height={648}
          alt="footer"
          src="/images/mobile/bottom-bg.png"
          className="mobile__bottom-bg"
        ></Image>
        <div className="mobile__bottom-box">
          <div className="mobile__bottom-box-1">
            <Image
              onClick={() =>
                window.open("https://twitter.com/pingpongbuild", "_blank")
              }
              width={150}
              height={150}
              alt="twitter"
              src="/images/mobile/twitter.png"
              className="mobile__bottom-box-1-item"
            ></Image>
            <Image
              width={150}
              height={150}
              alt="go"
              src="/images/mobile/go.png"
              className="mobile__bottom-box-1-item"
            ></Image>
            <Image
              width={150}
              height={150}
              alt="reddit"
              src="/images/mobile/reddit.png"
              className="mobile__bottom-box-1-item"
            ></Image>
          </div>
          <div className="mobile__bottom-box-2"></div>
          <div className="mobile__bottom-box-3"></div>
          <div className="mobile__bottom-box-4"></div>
        </div>
      </div>
    </div>
  );
}
