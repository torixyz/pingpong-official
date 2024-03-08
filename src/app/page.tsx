import { headers } from "next/headers";
import Pc from "../../components/pc/page";
import Mobile from "../../components/mobile/page";

const isMobile = (userAgent: string) => {
  // const u = navigator.userAgent;
  const u = userAgent;
  return u.match(/Mobi/i) || u.match(/Android/i) || u.match(/iPhone/i);
};

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("User-Agent");
  const _isMobile = isMobile(userAgent || "");
  console.log("===isMobile", userAgent, _isMobile, 111);
  return <>{_isMobile ? <Mobile></Mobile> : <Pc></Pc>}</>;
}
