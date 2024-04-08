"use client"
import { useEffect, useState } from "react";
import Pc from "../../../components/pc_new/page";

export default function Home() {
  const [windowSize, setWindowSize] = useState(0)
  useEffect(() => {
    const handle =() => {
      console.log('resize')
      setWindowSize((pre) => pre + 1)
      setTimeout(() => {

        ScrollTrigger.refresh(true) ;
      }, 1000)
    }
    window.addEventListener("resize", handle);
    return () => {
        window.removeEventListener("resize", handle)
    }
  }, []);
  return <Pc key={windowSize}></Pc>;
}