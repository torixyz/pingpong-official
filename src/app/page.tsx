"use client";

import Image from "next/image";
import "./page.scss";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.ontimeupdate = (e) => {
        const second = Math.floor(e.timeStamp / 1000);
        if (videoRef.current && second === 6) {
          const list: NodeListOf<HTMLElement> =
            document.querySelectorAll(".first-invisible");
          Array.from(list || []).forEach((item: HTMLElement) => {
            item.style.opacity = "1";
          });
        }
      };
    }
  }, []);
  return (
    <div className="home__wrapper">
      <video
        className="home__first-video"
        ref={videoRef}
        src="/first.mp4"
        autoPlay={true}
        muted={true}
      ></video>
      <Image
        className="home__logo first-invisible"
        width={243}
        height={210}
        src="/logo.png"
        alt="logo"
      ></Image>
      <div className="home__nav first-invisible">
        <div className="home__nav-item">
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
        <div className="home__nav-item">
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
        </div>
        <div className="home__nav-item">
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
        </div>
      </div>
      <div className="home__service first-invisible">
        <Image
          width={1440}
          height={1028}
          src="/bg1.png"
          className="home__service-bg"
          alt="bg1"
        ></Image>
        <Image
          alt="subscribe"
          width={526}
          height={72}
          src="/subscribe.png"
          className="home__service-btn"
        ></Image>
      </div>
      <div className="home__hook">
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
        <video
          className="home__hook-video"
          src="/second.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <div className="home__hook-content">
          <div className="home__hook-detail">
            The world&apos;s first <span>DePIN liquidity aggregation protocol</span>.
            Turning AI computational resources into a new form of DeFi
            liquidity. <br></br>
            <br></br>
            Get the maximum <span>DePIN mining</span> yield from us!
          </div>
          <div className="home__hook-soon">Coming soon...</div>
        </div>
      </div>
      <div className="home__sdk">
        <Image
          src="/bg3.png"
          alt="sdk"
          width={2135}
          height={1023}
          className="home__sdk-bg"
        ></Image>
        <video
          className="home__sdk-video"
          src="/third.mp4"
          autoPlay={true}
          muted={true}
        ></video>
        <div className="home__sdk-content">
          <div>
            One SDK for all DePINs. <br></br>DePIN Development experience
            streamlined.
          </div>
          <ol className="home__sdk-ul">
            We route requests based on -<li>Computation resource depth</li>
            <li>Pricing</li>
            <li>Network health status</li>
            <li>Edge & geo response time optimization</li>
          </ol>
          <div className="home__sdk-soon">Coming soon...</div>
        </div>
        <div className="home__sdk-desc-box">
          <div>
            We are a bunch of pro-human degens with experience working at tech
            giants, top DeFi protocols, super well-funded Layer1 chain, and
            crypto funds & trading prop shop, as founding team members, senior
            managers, and C-levels. Graduated from top universities etc etc.{" "}
            <br></br>
            <br></br>
            However, please try to look beyond these labels on us. Labels are
            shortcuts to establishing authority and building blind trust, but
            they don&apos;t help us humans to bond and your precious trust should not
            be given for free.<br></br>
            <br></br>
            We encourage you to feel us, feel our passion, through our products
            and words. We are human-made and are cooking smth smth cool for
            humans, for you & your kids, for making democratizing the future of
            compute a <span>dream come true</span>🪄.
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
            <div className="home__footer-nav-item">
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
            <div className="home__footer-nav-item">
              <Image
                className="home__footer-nav-item-img"
                src="/whitepaper-footer.png"
                width={203}
                height={43}
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1.2)",
                }}
                alt="products"
              ></Image>
              <Image
                className="home__footer-nav-item-img--active"
                src="/whitepaper-footer-active.png"
                width={203}
                height={43}
                style={{
                  transformOrigin: "center center",
                  transform: "scale(1.2)",
                }}
                alt="products"
              ></Image>
            </div>
            <div className="home__footer-nav-item">
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
            </div>
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
    </div>
  );
}
