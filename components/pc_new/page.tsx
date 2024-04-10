"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Gobold, MontserratFont} from "../../common/font";
import Image from "next/image";
import "animate.css";
import "./page.scss";

import { Twitter, Discord, WhitePaper, Medium, HelpCenter } from "../../common/constants";

import products from '@/../public/images/index_new/pc/products.png'
import productsActive from '@/../public/images/index_new/pc/products-active.png'
import about from '@/../public/images/index_new/pc/about.png'
import aboutActive from '@/../public/images/index_new/pc/about-active.png'
import community from '@/../public/images/index_new/pc/community.png'
import communityActive from '@/../public/images/index_new/pc/community-active.png'
import launch from '@/../public/images/index_new/pc/launch.png'
import launchActive from '@/../public/images/index_new/pc/launch-active.png'

import frame22Content1 from '@/../public/images/index_new/pc/frame2_2_content1.png'
import frame22Content2 from '@/../public/images/index_new/pc/frame2_2_content2.png'
import frame22Content3 from '@/../public/images/index_new/pc/frame2_2_content3.png'

import frame23Step1 from '@/../public/images/index_new/pc/frame2_3_step1.png'
import frame23Step2 from '@/../public/images/index_new/pc/frame2_3_step2.png'
import frame23Step3 from '@/../public/images/index_new/pc/frame2_3_step3.png'

import footerTwitter from '@/../public/images/index_new/pc/footer_twitter.png'
import footerTwitterActive from '@/../public/images/index_new/pc/footer_twitter_active.png'
import footerReddit from '@/../public/images/index_new/pc/footer_reddit.png'
import footerRedditActive from '@/../public/images/index_new/pc/footer_reddit_active.png'
import footerDiscord from '@/../public/images/index_new/pc/footer_discord.png'
import footerDiscordActive from '@/../public/images/index_new/pc/footer_discord_active.png'
import {Inter} from "next/font/google";
import {toast} from "sonner";
import {WHITEPAPER_LINK} from "@/config/link";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function PcNewDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayed = useRef(false);
  const frame1FooterRef = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const frame3Ref = useRef<HTMLDivElement>(null);
  const frame6Ref = useRef<HTMLDivElement>(null);
  const frame6BgRef = useRef<HTMLImageElement>(null);
  const frame6ContentRef = useRef<HTMLImageElement>(null);

  const [frame2Width, setFrame2Width] = useState(0);
  const [frame3Width, setFrame3Width] = useState(0);
  const [frame6Height, setFrame6Height] = useState(0);
  const [frame6BgHeight, setFrame6BgHeight] = useState(0);
  const [frame6ContentHeight, setFrame6ContentHeight] = useState(0);

  const [frame22ActiveContentIndex, setFrame22ActiveContentIndex] = useState(0);

  useEffect(() => {
    if (!frame2Ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Do what you want to do when the size of the element changes
      console.log('frame2Ref', frame2Ref.current, frame2Ref.current?.scrollWidth, frame2Ref.current?.offsetHeight)
      if(frame2Ref.current?.scrollWidth) {
        setFrame2Width(frame2Ref.current.scrollWidth);
      }
    });
    resizeObserver.observe(frame2Ref.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);
  useEffect(() => {
    if (!frame3Ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Do what you want to do when the size of the element changes
      console.log('frame3Ref', frame3Ref.current, frame3Ref.current?.scrollWidth, frame3Ref.current?.offsetHeight)
      if(frame3Ref.current?.scrollWidth) {
        setFrame3Width(frame3Ref.current.scrollWidth);
      }
    });
    resizeObserver.observe(frame3Ref.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);


  // frame6
  useEffect(() => {
    if (!frame6Ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Do what you want to do when the size of the element changes
      console.log('frame6Ref', frame6Ref.current, frame6Ref.current?.scrollWidth, frame6Ref.current?.offsetHeight)
      if(frame6Ref.current?.clientHeight && frame6BgRef.current && frame6ContentRef.current) {
        setFrame6Height(frame6Ref.current.clientHeight);
        setFrame6BgHeight(frame6BgRef.current.clientHeight)
        setFrame6ContentHeight(frame6ContentRef.current.clientHeight)
      }
    });
    resizeObserver.observe(frame6Ref.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);


  useGSAP(() => {
    // gsap code here...
    // frame2
    // console.log('frame2Ref', frame2Ref.current, frame2Ref.current?.scrollWidth, frame2Ref.current?.offsetHeight)

    console.log('===3', -frame2Width + document.documentElement.clientWidth)
    gsap.to(".frame-2", {
      x: frame2Width ? (-frame2Width + document.documentElement.clientWidth) + 'px' : "-210vw",
      // x: "-260%",
      scrollTrigger: {
        trigger: ".frame-2",
        start: "top 0",
        end: "+=300%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    gsap.to(".frame-2-3__content-item--2", {
      x: '0.1vh',
      scrollTrigger: {
        // trigger: ".frame-2-3__content-item--1",
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });
    gsap.to(".frame-2-3__content-item--3", {
      x: '0.1vh',
      scrollTrigger: {
        // trigger: ".frame-2-3__content-item--1",
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    // frame3
    gsap.to(".frame-3", {
      x: frame3Width ? (-frame3Width + document.documentElement.clientWidth) + 'px' : "-210vw",
      scrollTrigger: {
        trigger: ".frame-3",
        start: "top 0",
        end: "+=400%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });
    gsap.to(".frame-5__content-main", {
      x: "-62.5vw",
      scrollTrigger: {
        trigger: ".frame-5",
        start: "top 0",
        end: "+=80%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    // gsap.to(".frame-6", {
    //   x: '0',
    //   y: '0',
    //   scrollTrigger: {
    //     trigger: ".frame-6",
    //     start: "top 0",
    //     end: "+=" + (frame6ContentHeight * 1.5 + (frame6BgHeight - frame6Height) + document.documentElement.clientHeight) + 'px',
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //   },
    // });

    gsap.timeline( {
      // y: "-" + frame6ContentHeight * 1.5 + 'px',
      scrollTrigger: {
        trigger: ".frame-6",
        start: "top 0",
        end: "+=" + frame6ContentHeight * 1.5 ,
        scrub: true,
        pin: true,
        markers: false,
      },
    }).to('.frame-6__content-main', {
      y: "-" + frame6ContentHeight * 1.1 + 'px',
    }).to('.frame-6__content-box', {
      y: "-" + (frame6BgHeight - frame6Height - 30) + 'px',

    });
    // gsap.to(".frame-6__content-bg", {
    //   y: "-" + (frame6BgHeight - frame6Height) + 'px',
    //   scrollTrigger: {
    //     trigger: ".frame-6",
    //     start: "top -" + (frame6ContentHeight * 1.5),
    //     end: "+=" + ((frame6BgHeight - frame6Height)) + 'px',
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //   },
    // });
  }, {dependencies: [ frame2Width, frame3Width, frame6Height, frame6BgHeight, frame6ContentHeight]});

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.ontimeupdate = (e) => {
        hasPlayed.current = true;

        const second = Math.floor(e.timeStamp / 1000);
        if (videoRef.current && second >= 5) {
          videoRef.current.ontimeupdate = null;
          if (frame1FooterRef.current) {
            frame1FooterRef.current.style.opacity = "1";
          }
        }
      };
    }
  }, []);

  return (
    <>
      <div className={"index__header "}>
        <Image
          className="index__header-logo"
          width={519}
          height={112}
          alt="logo"
          src="/images/index_new/pc/logo.png"
        ></Image>
        <div className="index__header-nav-list">
          {[
            {
              name: "products",
              src: products,
              activeSrc: productsActive,
              link: "https://pingpong.finance/launch",
            },
            {
              name: "community",
              src: community,
              activeSrc: communityActive,
              link: "https://pingpong.finance/about",
            },
            {
              name: "about",
              src: about,
              activeSrc: aboutActive,
              link: "https://pingpong.finance/whitepaper",
            },
          ].map((item, index) => (
            <div className="index__header-nav-item" key={item.name}>
              <Image
                src={item.src}
                height={140}
                alt={item.name}
                className="index__header-nav-item-image"
              ></Image>
              <Image
                src={item.activeSrc}
                height={140}
                alt={item.name}
                className="index__header-nav-item-image--active"
              ></Image>
              {index === 0 ? (
                <div className="index__header-nav-dropdown" onClick={(e) => {
                  e.stopPropagation();
                }}>
                  <Image
                    src="/images/index_new/pc/header_product_dropdown.png"
                    width={1044}
                    height={812}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-1-bg"
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_product_dropdown_button.png"
                    width={704}
                    height={134}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-1-button"
                    onClick={(e) => {
                      window.open('https://goldminer.pingpong.build/login', '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                </div>
              ) : null}
              {index === 1 ? (
                <div className="index__header-nav-dropdown" onClick={(e) => {
                  e.stopPropagation();
                }}>
                  <Image
                    src="/images/index_new/pc/header_community_dropdown.png"
                    width={1044}
                    height={812}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-bg"
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_community_dropdown_button1.png"
                    width={636}
                    height={104}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-button1"
                    onClick={(e) => {
                      window.open(Discord, '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_community_dropdown_button2.png"
                    width={636}
                    height={104}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-button2"
                    onClick={(e) => {
                      window.open(Twitter, '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_community_dropdown_button3.png"
                    width={636}
                    height={104}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-button3"
                    onClick={(e) => {
                      window.open(Medium, '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                </div>
              ) : null}
              {index === 2 ? (
                <div className="index__header-nav-dropdown" onClick={(e) => {
                  e.stopPropagation();
                }}>
                  <Image
                    src="/images/index_new/pc/header_community_dropdown.png"
                    width={1044}
                    height={812}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-bg"
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_about_dropdown_button1.png"
                    width={636}
                    height={104}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-button1"
                    onClick={(e) => {
                      window.open(HelpCenter, '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_about_dropdown_button2.png"
                    width={636}
                    height={104}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-button2"
                    onClick={(e) => {
                      window.open(WhitePaper, '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                  <Image
                    src="/images/index_new/pc/header_about_dropdown_button3.png"
                    width={636}
                    height={104}
                    alt={"dropdown"}
                    className="index__header-nav-dropdown-2-button3"
                    onClick={(e) => {
                      // window.open('https://goldminer.pingpong.build/login', '_blank');
                      e.stopPropagation();
                    }}
                  ></Image>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="index__header-launch" onClick={() => toast('Coming soon...')}>
          <Image
            className="index__header-launch-image"
            src={launch}
            alt="launch"
          ></Image>
          <Image
            className="index__header-launch-image--active"
            src={launchActive}
            alt="launch"
          ></Image>
        </div>
      </div>
      <div className={"page " + Gobold.className}>
        <div className="whole-x frame-1">
          <video
            style={{
              width: "100%",
            }}
            ref={videoRef}
            // src="/first.mp4"
            autoPlay={true}
            muted={true}
          >
            <source
              src="/images/index_new/pc/video_1.mp4"
              type="video/mp4"
            ></source>
            {/* <source src="/first.mp4" type="video/mp4"></source> */}
          </video>
          <div className="frame-1__footer" ref={frame1FooterRef}>
            <Image
              width={3840}
              height={400}
              src="/images/index_new/pc/frame_1_footer.png"
              alt="frame one footer"
              className="frame-1__footer-image"
            />
            <div className="frame-1__footer-content">
              <div className="frame-1__footer-content-description">
              depin mining aggregator - light node beta version released! 🚀
              </div>
              <div className="frame-1__footer-content-button-box">
                <div className={`frame-1__footer-content-button ${MontserratFont.className}`}>
                Unlock #DePINFi with PINGPONG!
                  <Image
                    width={216}
                    height={203}
                    alt={"pointer"}
                    src="/images/index_new/pc/point.png"
                    className="frame-1__footer-content-button-pointer"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="whole__wrapper frame-2" ref={frame2Ref}>
          <div className="whole__y frame-2-1">
            <Image
              width={3860}
              height={2316}
              className="frame-2-1__bg"
              alt="frame background"
              src="/images/index_new/pc/book-texture-bg.png"
            ></Image>
            <Image
              width={1092}
              height={256}
              className="frame-2-1__title"
              alt="frame title"
              src="/images/index_new/pc/frame2_product_title.png"
            ></Image>
            <video
              className="frame-2-1__video"
              loop={true}
              autoPlay={true}
              muted={true}
            >
              <source
                src="/images/index_new/pc/video_2_chrome.webm"
                type="video/mp4"
              ></source>
              <source
                src="/images/index_new/pc/video_2_safari.mp4"
                type="video/mp4"
              ></source>
            </video>
            <Image
              width={1918}
              height={800}
              className="frame-2-1__right1"
              alt="frame right"
              src="/images/index_new/pc/frame2_right1.png"
            ></Image>
            <Image
              width={1718}
              height={400}
              className="frame-2-1__right2"
              alt="frame right"
              src="/images/index_new/pc/frame2_right2.png"
            ></Image>
            <div className="frame-2-1__right3-box">
              <Image
                width={1290}
                height={465}
                className="frame-2-1__right3"
                alt="frame right"
                src="/images/index_new/pc/frame2_right3.png"
              ></Image>
              <div className="frame-2-1__right3-click-area"></div>
            </div>
          </div>
          <div className="whole__y frame-2-2">
            <Image
              width={3840}
              height={800}
              className="frame-2-2__title"
              alt="frame title"
              src="/images/index_new/pc/frame2_2_title.png"
            ></Image>
            <div className="frame-2-2__content">
              <div className={`frame-2-2__content-list ${MontserratFont.className}`}>
                {[
                  {
                    content: frame22Content1,
                    description:
                      "PINGPONG supports multiple DePIN networks mining running concurrently with a single click of button.",
                  },
                  {
                    content: frame22Content2,
                    description:
                      "A wide range of supported device types allows you to mine the new goldmine with all your devices! ",
                  },
                  {
                    content: frame22Content3,
                    description:
                      "Our dynamic DePIN mining algorithm maximizes your overall yield by expanding network connections and auto-switching to different DePIN networks!",
                  },
                ].map((item, index) => (
                  <div
                    className="frame-2-2__content-list-item"
                    key={index}
                    onMouseOver={() => setFrame22ActiveContentIndex(index)}
                  >
                    <div className="frame-2-2__content-list-item-description">
                      {item.description}
                    </div>
                    {frame22ActiveContentIndex === index ? (
                      <Image
                        src={item.content}
                        width={2700}
                        height={0}
                        alt="content"
                        className={
                          "frame-2-2__content-list-item-content frame-2-2__content-list-item-content--" +
                          (index + 1)
                        }
                      ></Image>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="whole__y frame-2-3">
            <Image
              width={3840}
              height={800}
              className="frame-2-3__title"
              alt="frame title"
              src="/images/index_new/pc/frame2_3_title.png"
            ></Image>
            <div className="frame-2-3__content">
              {[frame23Step1, frame23Step2, frame23Step3].map((item, index) => {
                return (
                  <Image
                    key={index}
                    width={800}
                    height={0}
                    className={
                      "frame-2-3__content-item frame-2-3__content-item--" +
                      (index + 1)
                    }
                    alt="frame content"
                    src={item}
                  ></Image>
                );
              })}
            </div>
            <div className="frame-2-3__footer-box">
              <Image
                width={3380}
                height={187}
                className="frame-2-3__footer-bg"
                alt="frame bg"
                src="/images/index_new/pc/frame2_3_footer_bg.png"
              ></Image>
              <div className="frame-2-3__footer-content">
                <div className="frame-2-3__footer-content-button-box" onClick={() => toast('Coming soon...')}>
                  <Image
                    width={606}
                    height={180}
                    className="frame-2-3__footer-content-button-img"
                    alt="frame bg"
                    src="/images/index_new/pc/step_by_step_guide.png"
                  ></Image>
                  <Image
                    width={606}
                    height={180}
                    className="frame-2-3__footer-content-button-img--active"
                    alt="frame bg"
                    src="/images/index_new/pc/step_by_step_guide_active.png"
                  ></Image>
                </div>
                <div className="frame-2-3__footer-content-button-box" onClick={() => toast('Coming soon...')}>
                  <Image
                    width={400}
                    height={180}
                    className="frame-2-3__footer-content-button-img"
                    alt="frame bg"
                    src="/images/index_new/pc/faq.png"
                  ></Image>
                  <Image
                    width={400}
                    height={180}
                    className="frame-2-3__footer-content-button-img--active"
                    alt="frame bg"
                    src="/images/index_new/pc/faq_active.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="whole__wrapper frame-3" ref={frame3Ref}>
          <div className="whole__y frame-3-1">
            <Image
              width={3860}
              height={2316}
              className="frame-3-1__bg"
              alt="frame background"
              src="/images/index_new/pc/book-texture-bg.png"
            ></Image>
            <Image
              width={1092}
              height={256}
              className="frame-3-1__title"
              alt="frame title"
              src="/images/index_new/pc/frame2_product_title.png"
            ></Image>
            <video
              className="frame-3-1__video"
              loop={true}
              autoPlay={true}
              muted={true}
            >
              <source
                src="/images/index_new/pc/video_3_chrome.webm"
                type="video/mp4"
              ></source>
              <source
                src="/images/index_new/pc/video_3_safari.mp4"
                type="video/mp4"
              ></source>
            </video>
            <Image
              width={1918}
              height={800}
              className="frame-3-1__right1"
              alt="frame right"
              src="/images/index_new/pc/frame3_1_title.png"
            ></Image>
            {/* <Image width={1718} height={400} className="frame-2-1__right2" alt="frame right" src="/images/index_new/pc/frame2_right2.png"></Image> */}
            <div className="frame-3-1__right2-box">
              <Image
                width={1338}
                height={1000}
                className="frame-3-1__right2"
                alt="frame right"
                src="/images/index_new/pc/frame3_right2.png"
              ></Image>
              <div className="frame-3-1__right2-button" onClick={() => window.open('https://grafana.pingpong.tech/d/cdgugvrew87i8b/depin?orgId=1&refresh=5s&from=1712586106739&to=1712586406739', '_blank')}>
                <Image
                  width={606}
                  height={180}
                  className="frame-3-1__right2-button-image"
                  alt="frame right"
                  src="/images/index_new/pc/learn_how_it_works.png"
                ></Image>
                <Image
                  width={606}
                  height={180}
                  className="frame-3-1__right2-button-image frame-3-1__right2-button-image--active"
                  alt="frame right"
                  src="/images/index_new/pc/learn_how_it_works_active.png"
                ></Image>
              </div>
            </div>
          </div>
          <div className="frame-3-2">
            <Image
              width={3840}
              height={800}
              className="frame-3-2__title"
              alt="frame title"
              src="/images/index_new/pc/frame3_2_title.png"
            ></Image>
            <Image
              width={2490}
              height={692}
              className="frame-3-2__content"
              alt="frame title"
              src="/images/index_new/pc/frame3_2_content.png"
            ></Image>
            <div className="frame-3-2__button-box">
              <Image
                width={2490}
                height={692}
                className="frame-3-2__button-box-bg"
                alt="button"
                src="/images/index_new/pc/frame3_2_button_bg.png"
              ></Image>
              <div className="frame-3-2__button-content">
                <div className="frame-3-2__button" onClick={() => window.open('https://grafana.pingpong.tech/d/cdgugvrew87i8b/depin?orgId=1&refresh=5s&from=1712586106739&to=1712586406739', '_blank')}>
                  <Image
                    width={606}
                    height={180}
                    className="frame-3-2__button-image"
                    alt="frame right"
                    src="/images/index_new/pc/check_comparison_depin_metrics.png"
                  ></Image>
                  <Image
                    width={606}
                    height={180}
                    className="frame-3-2__button-image frame-3-2__button-image--active"
                    alt="frame right"
                    src="/images/index_new/pc/check_comparison_depin_metrics_active.png"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="whole__y frame-3-3">
            <div className="frame-3-3__img-box">
              <Image
                width={1878}
                height={1691}
                className="frame-3-3__img"
                alt="compute"
                src="/images/index_new/pc/frame3_3_img.png"
              ></Image>
              <Image
                width={1878}
                height={1691}
                className="frame-3-3__img-cover"
                alt="compute cover"
                src="/images/index_new/pc/frame3_3_img_cover.png"
              ></Image>
              <Image
                width={216}
                height={203}
                className="frame-3-3__img-pointer"
                alt="pointer"
                src="/images/index_new/pc/point2.png"
              ></Image>
            </div>
          </div>
          <div className="whole__y frame-3-4">
            <div className="frame-3-4__content-box">
              <Image
                width={3840}
                height={800}
                className="frame-3-4__title"
                alt="frame title"
                src="/images/index_new/pc/frame3_4_title.png"
              ></Image>
              <Image
                width={2016}
                height={981}
                className="frame-3-4__content"
                alt="frame title"
                src="/images/index_new/pc/frame3_4_content.png"
              ></Image>
              {/* <div className="frame-3-4__button-box"> */}
              <Image
                onClick={() => window.open(WHITEPAPER_LINK, '_blank')}
                width={2490}
                height={692}
                className="frame-3-4__button"
                alt="button"
                src="/images/index_new/pc/frame3_4_button.png"
              ></Image>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="whole__x frame-4">
          <Image
            width={1439}
            height={239}
            className="frame-4__title"
            alt="button"
            src="/images/index_new/pc/frame4_title.png"
          ></Image>
          <div className="frame-4__card-list">
            <div className="frame-4__card-box">
              <div className="frame-4__card">
                <Image
                  width={800}
                  height={1200}
                  className="frame-4__card-img"
                  alt="button"
                  src="/images/index_new/pc/frame4_content1.png"
                ></Image>
                <div className="frame-4__card-mix"></div>
              </div>
              <Image
                width={620}
                height={550}
                className="frame-4__card-text"
                alt="button"
                src="/images/index_new/pc/frame4_text1.png"
              ></Image>
            </div>
            <div className="frame-4__card-box">
              <div className="frame-4__card">
                <Image
                  width={800}
                  height={1200}
                  className="frame-4__card-img"
                  alt="button"
                  src="/images/index_new/pc/frame4_content2.png"
                ></Image>
                <div className="frame-4__card-mix"></div>
              </div>
              <Image
                width={620}
                height={490}
                className="frame-4__card-text"
                alt="button"
                src="/images/index_new/pc/frame4_text2.png"
              ></Image>
            </div>
            <div className="frame-4__card-box">
              <div className="frame-4__card">
                <Image
                  width={800}
                  height={1200}
                  className="frame-4__card-img"
                  alt="button"
                  src="/images/index_new/pc/frame4_content3.png"
                ></Image>
                <div className="frame-4__card-mix"></div>
              </div>
              <Image
                width={620}
                height={610}
                className="frame-4__card-text"
                alt="button"
                src="/images/index_new/pc/frame4_text3.png"
              ></Image>
            </div>
          </div>
        </div>
        <div className="whole__x frame-5">
          <Image
            width={865}
            height={239}
            className="frame-5__title"
            alt="button"
            src="/images/index_new/pc/frame5_title.png"
          ></Image>
          <div className="frame-5__content">
            <Image
              width={3240}
              height={1382}
              className="frame-5__content-bg"
              alt="button"
              src="/images/index_new/pc/frame5_content_bg.png"
            ></Image>
            <Image
              width={4693}
              height={694}
              className="frame-5__content-main"
              alt="button"
              src="/images/index_new/pc/frame5_content.png"
            ></Image>
          </div>
        </div>
        <div className="whole__x frame-6">
          <Image
            width={2119}
            height={239}
            className="frame-6__title"
            alt="button"
            src="/images/index_new/pc/frame6_title.png"
          ></Image>
          <div className="frame-6__content" ref={frame6Ref}>
            <div className="frame-6__content-box">
              <Image
                ref={frame6BgRef}
                width={3240}
                height={3267}
                className="frame-6__content-bg"
                alt="button"
                src="/images/index_new/pc/frame6_bg.png"
              ></Image>
              <Image
                ref={frame6ContentRef}
                width={2330}
                height={2011}
                className="frame-6__content-main"
                alt="button"
                src="/images/index_new/pc/frame6_content.png"
              ></Image>
            </div>
          </div>
        </div>
        {/* <div className="whole__wrapper frame-5">
          <div className="frame-5_title">road map</div>
          <div className="whole frame-5-1">5-1</div>
        </div> */}
        <div className="whole__x footer">
          <Image
            width={3848}
            height={1891}
            className="footer__bg"
            alt="footer bg"
            src="/images/index_new/pc/footer_bg.png"
          ></Image>
          <div className="footer__content">
            <div className="footer__content-nav-box">
              <Image
                width={952}
                height={637}
                className="footer__content-nav-bg"
                alt="footer bg"
                src="/images/index_new/pc/footer_content_bg.png"
              ></Image>
              <div className="footer__content-nav">
                {[
                  {
                    icon: footerTwitter,
                    activeIcon: footerTwitterActive,
                    url: Twitter,
                  },
                  {
                    icon: footerReddit,
                    activeIcon: footerRedditActive,
                    url: Medium
                  },
                  {
                    icon: footerDiscord,
                    activeIcon: footerDiscordActive,
                    url: Discord
                  },
                ].map((item, index) => {
                  return (
                    <div className="footer__content-item" key={index} onClick={() => {
                      window.open(item.url, '_blank')
                    }}>
                      <Image
                        width={160}
                        height={160}
                        className="footer__content-item-img"
                        alt="nav icon"
                        src={item.icon}
                      ></Image>
                      <Image
                        width={160}
                        height={160}
                        className="footer__content-item-img--active"
                        alt="nav icon"
                        src={item.activeIcon}
                      ></Image>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`footer__nav-box ${MontserratFont.className}`}>
              {[
                {
                  title: "PRODUCT",
                  list: [
                    {
                      label: "DePIN Liquidity Hook Money Market(SOON)",
                      url: "",
                    },
                    {
                      label: "DePIN Service Hook All-in-one SDK(SOON)",
                      url: "",
                    },
                    {
                      label: "PINGPONG Gold Miner (4 fun only)",
                      url: "https://goldminer.pingpong.build",
                    },
                  ],
                },
                {
                  title: "COMMUNITY",
                  list: [
                    {
                      label: "Discord",
                      url: Discord,
                    },
                    {
                      label: "Medium",
                      url: Medium,
                    },
                    {
                      label: "X",
                      url: Twitter,
                    },
                  ],
                },
                {
                  title: "ABOUT",
                  list: [
                    {
                      label: "Whitepaper",
                      url: WhitePaper,
                    },
                    {
                      label: "Help Center",
                      url: HelpCenter,
                    },
                    {
                      label: "FAQ",
                      url: "",
                    },
                  ],
                },
              ].map((item) => {
                return (
                  <div className="footer__nav-item" key={item.title}>
                    <div className="footer__nav-item-title">{item.title}</div>
                    <div className="footer__nav-item-content">
                      {item.list.map((_item) => {
                        return (
                          <div
                            className="footer__nav-item-content-item"
                            key={_item.label}
                            onClick={() => {
                              if (_item.url) {
                                window.open(_item.url, "_blank");
                              } else {
                                toast('Coming soon...')
                              }
                            }}
                          >
                            {_item.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`footer__bottom font-bold ${MontserratFont.className}`}>
            <div className="footer__bottom-left">© PINGPONG</div>
            <div className="footer__bottom-right uppercase">
              THe Largest DEPIN LEquidity & Service Aggregator
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
