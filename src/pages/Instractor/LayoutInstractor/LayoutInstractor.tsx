import ScrollToTop from "@/components/common/ScrollToTop";
import InsNavbar from "../Component/Navbar/InsNavbar";
import InsFooter from "../Component/Footer/InsFooter";
import { Outlet } from "react-router-dom";

export default function LayoutInstractor() {
  return (
     <>
      <ScrollToTop />
      <InsNavbar />
      <main className="flex-1 w-full max-w-[1240px] mx-auto p-4 md:py-6 lg:py-10 min-h-screen overflow-hidden">
        <Outlet />
      </main>
      <InsFooter />
    </>
  )
}
