import Image from "next/image"
import { SignupFormDemo } from "./SignupFormDemo"

const Footer = () => {
  return (
<footer className="w-full pt-20 pb-10 " id="contact">
   <div className="w-full absolute left-0 -bottom-72 min-h-96">
      <Image src="/footer-grid.svg" alt="grid"   className="w-full h-full opacity-50"/>
   </div>
   <div className="flex flex-col items-center justify-center gap-10 md:flex-row lg:flex-row relative">
       <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-5">
              <Image src="/mypic.png" alt="my avatar" className="w-[400px] h-full"/>
              <h1 className="text-xl lg:max-w-[45vw] text-balance text-center">&quot;Thanks for visiting my portfolio. Let&apos;s connect and turn your ideas into reality with innovative and reliable solutions that meet your needs.&quot;</h1>
            </div>
       </div>
       <SignupFormDemo/>
   </div>
</footer>
  )
}

export default Footer
