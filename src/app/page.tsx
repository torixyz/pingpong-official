import { headers } from "next/headers";
import Pc from "../../components/pc_new/page";
import Mobile from "../../components/mobile/page";
import {Toaster} from "sonner";
import { MontserratFont} from "../../common/font";


const isMobile = (userAgent: string) => {
  // const u = navigator.userAgent;
  const u = userAgent;
  return u.match(/Mobi/i) || u.match(/Android/i) || u.match(/iPhone/i);
};

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("User-Agent");
  const _isMobile = isMobile(userAgent || "");
  return <>
  <Toaster position={'top-center'} toastOptions={{
    style: {
      background: '#F7CA3A',
      borderRadius: 0,
      border: '2px solid #3d3d3d',
      minWidth: _isMobile ? '50vw' : '160px',
      fontWeight: "bolder",
      width: 'auto',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    className: MontserratFont.className,
  }} />
  {_isMobile ? <Mobile></Mobile> : <Pc></Pc>}</>;
}
