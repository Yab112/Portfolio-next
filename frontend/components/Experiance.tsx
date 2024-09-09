import { workExperience } from "@/data"
import { Button } from "./ui/moving-border"

const Experiance = () => {
    return (
      <section className="py-12">
        <h1 className="heading">
          My {` `}
          <span className="text-purple">Work experiance</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
              duration={Math.floor(Math.random() * 10000) + 9000}
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
            >
              <div className="flex p-4">
                <img src={card.thumbnail} alt={card.thumbnail} className="w-40 h-40 object-cover mb-4" />
                <div className="flex flex-col max-w-[70%] items-start justify-center">
                  <h1 className="text-xl font-bold mb-2 self-center">{card.title}</h1>
                  <p className="text-white-100 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </section>
    )
}

export default Experiance