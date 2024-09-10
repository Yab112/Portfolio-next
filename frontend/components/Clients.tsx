import {InfiniteMovingCards} from "./ui/InfiniteMovingCards"
import {testimonials} from "../data";
const Clients = () => {  return (
    <section className="py-12" id="testimonials">
       <h1 className="heading">
        small selection of {` `} 
        <span className="text-purple">What Clients Say About Me</span>
       </h1>
       <div className="flex flex-col  justify-center max-lg:mt-10">
        
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"/>

        {/* <div className="flex gap-2 mt-16 justify-center items-center max-w-20 flex-wrap me-10">
            {companies.map((company, index) => (
              <div key={index} className="flex md:max-w-60 items-center justify-center gap-2 max-w-32">
                <img src={company.img} alt={company.name} className="md:w-10 w-5  rounded-full" />
                <p className="text-center mt-2">{company.name}</p>
              </div>
            ))}
        </div> */}
      </div>

    </section>
  )
}

export default Clients
