import localFont from "next/font/local";
import { Montserrat } from "next/font/google";


export const LoveYaLikeASister = localFont({
  src: [
    {
      path: "../public/font/Love_Ya_Like_A_Sister/LoveYaLikeASister-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-LoveYaLikeASister",
});

export const MontserratFont = Montserrat({subsets: ['latin'], weight: ['400', '700', '800']})

export const Gobold = localFont({
  src: [
    {
      path: "../public/font/Gobold/Gobold Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Gobold",
});
