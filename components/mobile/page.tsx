"use client";
import Image from "next/image";
import "./page.scss";
import { WHITEPAPER_LINK } from "@/config/link";

import { useState } from "react";

export default function Mobile() {
  const [isModalOpen, setModalOpen] = useState(false);
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
            window.open(WHITEPAPER_LINK, "_blank");
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
          width={719}
          height={1386}
          className="mobile__block-1-bg-2"
          alt="bg"
          src="/images/index_new/mobile/bg1_2.png"
        ></Image>
      </div>
      <div className="mobile__block1-box1">
        <Image
          width={786}
          height={280}
          className="mobile__common-img"
          alt="bg"
          src="/images/index_new/mobile/frame1_footer.png"
        ></Image>
        <div className="mobile__block1-button1" onClick={() => {
          setModalOpen(true)
        }}></div>
      </div>
      <Image
        width={1179}
        height={1397}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/1_01.png"
      ></Image>
      <Image
        width={1179}
        height={1158}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/1_02.png"
      ></Image>
      <div className="mobile__common-box">
        <Image
          width={1179}
          height={1966}
          className="mobile__common-img"
          alt="content"
          src="/images/index_new/mobile/1_03.png"
        ></Image>
        <div className="mobile__1_03_button" onClick={() => setModalOpen(true)}></div>
      </div>
      <Image
        width={1179}
        height={1300}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/1_04.png"
      ></Image>
      <Image
        width={1179}
        height={1769}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/1_05.png"
      ></Image>
      <Image
        width={1179}
        height={1826}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/2_01.png"
      ></Image>
      <Image
        width={1179}
        height={1197}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/2_02.png"
      ></Image>
      <Image
        width={1179}
        height={1379}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/2_03.png"
      ></Image>
      <Image
        width={1179}
        height={1263}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/2_04.png"
      ></Image>
      <Image
        width={1179}
        height={2021}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/2_05.png"
      ></Image>
      <Image
        width={1179}
        height={1986}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/3.png"
      ></Image>
      <Image
        width={1179}
        height={2229}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/4.png"
      ></Image>
      <Image
        width={1179}
        height={2556}
        className="mobile__common-img"
        alt="content"
        src="/images/index_new/mobile/5.png"
      ></Image>
    
      <Image
        onClick={() => scrollToTop()}
        width={556}
        height={120}
        className="mobile__block-6-button"
        alt="button"
        src="/images/mobile/button6.png"
      ></Image>
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
              onClick={() =>
                window.open("https://discord.gg/3vYGdfDqvs", "_blank")
              }
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
      {
        isModalOpen ? (
          <div className="modal__wrapper">
            <div className="modal__mask" onClick={() => {
              setModalOpen(false)
            }}>
            </div>
            <div className="modal__content">
              <Image
                width={786}
                height={128}
                alt="toast"
                src="/images/index_new/mobile/toast.png"
                className="mobile__block1-toast"
              ></Image>
            </div>
          </div>
        ) : null
      }
    </div>
  );
}
