import { title } from "process"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from "@/data"

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map((item,id)=>(
                  <BentoGridItem
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
