import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaContao, FaHome } from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex bg-black justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-[100vw]">
      <div className="w-full">
        <FloatingNav navItems={[
          {
            name: "About",
            link: "/about",
            icon:<FaHome/>
          },
          {
            name: "Projects",
            link: "/projects",
            icon:<FaRProject/>

          },
          {
            name: "Contact",
            link: "/contact",
            icon:<FaContao/>
          },
        ]}/>
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
