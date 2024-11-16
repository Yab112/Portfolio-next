import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
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
        <Footer/>
        <RevelCard/>
      </div>

    </main>
  );
}
