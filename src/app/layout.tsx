import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {LoveYaLikeASister, MontserratFont} from "../../common/font";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PINGPONG",
  description: "// building world's 1st DePINFi money market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        fontFamily: LoveYaLikeASister.style.fontFamily,
      }}
    >
      <body className={inter.className + " " + LoveYaLikeASister.className}>
        <Toaster position={'top-center'} toastOptions={{
          style: {
            background: '#F7CA3A',
            borderRadius: 0,
            border: '2px solid #3d3d3d',
            minWidth: '160px',
            fontWeight: "bolder",
            width: 'auto'
          },
          className: MontserratFont.className,
        }} />
        {children}
      </body>
    </html>
  );
}
