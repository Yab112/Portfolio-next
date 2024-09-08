import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
      <section id="about">
        <BentoGrid className="w-[80vw] py-24 mx-auto">
          {gridItems.map((item, id) => (
            <BentoGridItem
              id={item.id}
              key={id}
              title={item.title}
              description={item.description}
              className={item.className}  
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </section>
    );
  };
  export default Grid;
  