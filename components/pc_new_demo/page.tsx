'use client'

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import "animate.css";
import "./page.scss";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function PcNewDemo() {
  useGSAP(() => {
    // gsap code here...
    gsap.to('.frame_2', {
      x: '-100%',
      scrollTrigger: {
        trigger: '.frame_2',
        start: 'top 0',
        end: '+=200%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
    gsap.to('.frame_3', {
      x: '-260%',
      scrollTrigger: {
        trigger: '.frame_3',
        start: 'top 0',
        end: '+=400%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
    gsap.to('.frame_5_1', {
      x: '-80vw',
      scrollTrigger: {
        trigger: '.frame_5',
        start: 'top 0',
        end: '+=80%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });

  
  }, {  });

  return <div className="page">
    <div className="whole frame_1">1</div>
    <div className="whole_wrapper frame_2">
      <div className="whole frame_2_1">2-1</div>
      <div className="whole frame_2_2">2-2</div>
    </div>
    <div className="whole_wrapper frame_3">
      <div className="whole frame_3_1">3-1</div>
      <div className="whole frame_3_2">3-2</div>
      <div className="whole frame_3_3">3-3</div>
      <div className="whole frame_3_4">3-4</div>
    </div>
    <div className="whole frame_4">4</div>
    <div className="whole_wrapper frame_5">
      <div className="frame_5_title">road map</div>
      <div className="whole frame_5_1">5-1</div>
    </div>
    <div className="whole frame_6">6</div>
    <div className="footer">
      footer
    </div>
  </div>
}