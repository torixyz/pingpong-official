"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "animate.css";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const homeServiceRef = useRef<HTMLDivElement>(null);
  const homeServiceBgRef = useRef<HTMLImageElement>(null);
  const homeServiceSubscribeRef = useRef<HTMLImageElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const [showFrame, setShowFrame] = useState(1);
  const hasPlayed = useRef(false);
  const isIos = () => {
    const u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  };
  useEffect(() => {
    if (videoRef.current) {
      if (isIos()) {
        videoRef.current.style.opacity = "0";
        if (homeServiceBgRef.current) {
          homeServiceBgRef.current.style.opacity = "1";
        }
        if (homeServiceSubscribeRef.current) {
          homeServiceSubscribeRef.current.style.opacity = "1";
        }
        setShowFrame(3);
        const list: NodeListOf<HTMLElement> =
          document.querySelectorAll(".first-invisible");
        Array.from(list || []).forEach((item: HTMLElement) => {
          // item.style.opacity = "1";
          item.classList.add("animate__animated", "animate__fadeInUp");
        });
      } else {
        videoRef.current.style.opacity = "1";

        videoRef.current.onended = () => {
          if (videoRef.current) {
            videoRef.current.style.opacity = "0";
          }
          if (homeServiceBgRef.current) {
            homeServiceBgRef.current.style.opacity = "1";
          }
        };

        videoRef.current.ontimeupdate = (e) => {
          hasPlayed.current = true;

          const second = Math.floor(e.timeStamp / 1000);
          console.log("second", second, e.timeStamp);
          if (videoRef.current && second >= 6) {
            videoRef.current.ontimeupdate = null;
            setShowFrame(3);
            if (homeServiceSubscribeRef.current) {
              homeServiceSubscribeRef.current.style.opacity = "1";
            }

            const list: NodeListOf<HTMLElement> =
              document.querySelectorAll(".first-invisible");
            Array.from(list || []).forEach((item: HTMLElement) => {
              item.classList.add("animate__animated", "animate__fadeInUp");
              // item.style.opacity = "1";
            });
          }
        };
      }
    }
  }, []);

  const scrollToProduct = () => {
    const el = document.getElementById("js__product");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home__wrapper">
      <video
        className="home__first-video"
        ref={videoRef}
        src="/first.webm"
        autoPlay={true}
        muted={true}
      ></video>
      {/* <Image
        className="home__first-bg"
        width={1920}
        height={1275}
        src="/first_bg.png"
        alt="bg"
      ></Image> */}
      <Image
        className="home__logo first-invisible"
        width={243}
        height={210}
        src="/logo.png"
        alt="logo"
      ></Image>
      <div className="home__nav first-invisible">
        <div className="home__nav-item" onClick={scrollToProduct}>
          <Image
            src="/products.png"
            width={203}
            height={43}
            className="home__nav-item-img"
            alt="products"
          ></Image>
          <Image
            src="/products-active.png"
            width={203}
            height={43}
            className="home__nav-item-img--active"
            alt="products"
          ></Image>
        </div>
        <Link
          href={"/whitepaperV0.1.0_0304.pdf"}
          target="_blank"
          className="home__nav-item"
        >
          <Image
            src="/whitepaper.png"
            width={203}
            height={43}
            className="home__nav-item-img"
            alt="products"
          ></Image>
          <Image
            src="/whitepaper-active.png"
            width={203}
            height={43}
            className="home__nav-item-img--active"
            alt="products"
          ></Image>
        </Link>
        <Link
          href={"https://twitter.com/pingpongbuild"}
          target="_blank"
          className="home__nav-item"
        >
          <Image
            src="/twitter.png"
            width={203}
            height={43}
            className="home__nav-item-img"
            alt="products"
          ></Image>
          <Image
            src="/twitter-active.png"
            width={203}
            height={43}
            className="home__nav-item-img--active"
            alt="products"
          ></Image>
        </Link>
      </div>
      <div className="home__service">
        {/* <Image
          width={1920}
          height={1275}
          src="/first_bg.png"
          className="home__service-bg"
          alt="bg1"
        ></Image> */}
        <Image
          ref={homeServiceBgRef}
          className="home__service-bg"
          width={1920}
          height={1275}
          src="/first_bg.png"
          alt="bg"
        ></Image>
        <Link href={"https://forms.gle/aDptNca4xz6yFZyg8"} target="_blank">
          <Image
            ref={homeServiceSubscribeRef}
            alt="subscribe"
            width={526}
            height={72}
            src="/subscribe.png"
            className="home__service-btn"
          ></Image>
        </Link>
      </div>
      <div className="home__hook" id="js__product">
        {showFrame > 1 ? (
          <div className="animate__animated animate__fadeInUp">
            <Image
              src="/bg2-1.png"
              alt="service"
              width={2873}
              height={1440}
              className="home__hook-bg1"
            ></Image>
            <Image
              src="/bg2-2.png"
              alt="service"
              width={5760}
              height={1512}
              className="home__hook-bg2"
            ></Image>
            <Image
              src="/bg2-3.png"
              alt="service"
              width={5760}
              height={1512}
              className="home__hook-bg3"
            ></Image>
            <video
              ref={video2Ref}
              className="home__hook-video"
              src="/second.webm"
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
            <div className="home__hook-content">
              <div className="home__hook-detail">
                The world&apos;s first{" "}
                <span>DePIN liquidity aggregation protocol</span>. Turning AI
                computational resources into a new form of DeFi liquidity.{" "}
                <br></br>
                <br></br>
                Get the maximum <span>DePIN mining</span> yield from us!
              </div>
              <div className="home__hook-soon">Coming soon...</div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="home__sdk">
        {showFrame > 2 ? (
          <div className="animate__animated animate__fadeInUp">
            <Image
              src="/bg3.png"
              alt="sdk"
              width={2135}
              height={1023}
              className="home__sdk-bg"
            ></Image>
            <video
              ref={video3Ref}
              className="home__sdk-video"
              src="/third.webm"
              autoPlay={true}
              muted={true}
            >
              {/* <source src="/third.webm" type="video/webm"></source> */}
            </video>
            <div className="home__sdk-content">
              <ol className="home__sdk-ul">
                We route requests based on -<li>Computation resource depth</li>
                <li>Pricing</li>
                <li>Network health status</li>
                <li>Edge & geo response time optimization</li>
              </ol>
              <div>
                One SDK for all DePINs. <br></br>DePIN Development experience
                streamlined.
              </div>

              <div className="home__sdk-soon">Coming soon...</div>
            </div>
            <div className="home__sdk-desc-box">
              <div>
                We are a bunch of pro-human degens with experience working at
                tech giants, top DeFi protocols, super well-funded Layer1 chain,
                and crypto funds & trading prop shop, as founding team members,
                senior managers, and C-levels. Graduated from top universities
                etc etc. <br></br>
                <br></br>
                However, please try to look beyond these labels on us. Labels
                are shortcuts to establishing authority and building blind
                trust, but they don&apos;t help us humans to bond and your
                precious trust should not be given for free.<br></br>
                <br></br>
                We encourage you to feel us, feel our passion, through our
                products and words. We are human-made and are cooking smth smth
                cool for humans, for you & your kids, for making democratizing
                the future of compute a <span>dream come true</span>.🪄
              </div>
            </div>
            <div className="home__footer">
              <div className="home__footer-logo-box">
                <Image
                  className="home__footer-logo"
                  width={243}
                  height={210}
                  src="/logo.png"
                  alt="logo"
                ></Image>
              </div>
              <div className="home__footer-nav">
                <div
                  className="home__footer-nav-item"
                  onClick={scrollToProduct}
                >
                  <Image
                    className="home__footer-nav-item-img"
                    src="/products-footer2.png"
                    width={203}
                    height={43}
                    alt="products"
                  ></Image>
                  <Image
                    className="home__footer-nav-item-img--active"
                    src="/product-footer-active.png"
                    width={203}
                    height={43}
                    alt="products"
                  ></Image>
                </div>
                <Link
                  href={"/whitepaperV0.1.0_0304.pdf"}
                  target="_blank"
                  className="home__footer-nav-item"
                >
                  <Image
                    className="home__footer-nav-item-img"
                    src="/whitepaper-footer.png"
                    width={95}
                    height={27}
                    alt="products"
                  ></Image>
                  <Image
                    className="home__footer-nav-item-img--active"
                    src="/whitepaper-footer-active.png"
                    width={95}
                    height={27}
                    alt="products"
                  ></Image>
                </Link>
                <Link
                  href={"https://twitter.com/pingpongbuild"}
                  target="_blank"
                  className="home__footer-nav-item"
                >
                  <Image
                    className="home__footer-nav-item-img"
                    src="/twitter-footer.png"
                    width={80}
                    height={80}
                    alt="products"
                  ></Image>
                  <Image
                    className="home__footer-nav-item-img--active"
                    src="/twitter-footer-active.png"
                    width={80}
                    height={80}
                    alt="products"
                  ></Image>
                </Link>
                <div className="home__footer-nav-item">
                  <Image
                    className="home__footer-nav-item-img"
                    src="/go.png"
                    width={80}
                    height={80}
                    alt="products"
                  ></Image>
                  <Image
                    className="home__footer-nav-item-img--active"
                    src="/go-active.png"
                    width={80}
                    height={80}
                    alt="products"
                  ></Image>
                </div>
                <div className="home__footer-nav-item">
                  <Image
                    className="home__footer-nav-item-img"
                    src="/reddit.png"
                    width={80}
                    height={80}
                    alt="products"
                  ></Image>
                  <Image
                    className="home__footer-nav-item-img--active"
                    src="/reddit-active.png"
                    width={80}
                    height={80}
                    alt="products"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
