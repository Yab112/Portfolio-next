import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaContao, FaHome } from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';
import Clients from "@/components/Clients";
import 'react-toastify/dist/ReactToastify.css';
import Experiance from "@/components/Experiance";
import Footer from "@/components/Footer";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import { navItems } from "@/data";
import RevelCard from "@/components/Footer2";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[100vw] w-full ">
      <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <ToastContainer/>
        <RecentProjects/>
        <Clients/>
        <Experiance/>
        <Footer/>
        <RevelCard/>
      </div>

    </main>
  );
}
