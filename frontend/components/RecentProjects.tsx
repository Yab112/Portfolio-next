import { projects } from "@/data"
import { ProjectCard } from "./ProjectCard"

const RecentProjects = () => {
  return (
    <div>
       <h1 className="heading">
        small selection of {` `} 
        <span className="text-purple">My recent Projects </span>
       </h1>
       <div className="flex justify-center flex-wrap p-4 gap-16 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
       </div>
    </div>
  )
}

export default RecentProjects
