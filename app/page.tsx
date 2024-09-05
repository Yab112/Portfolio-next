import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-w-full">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
