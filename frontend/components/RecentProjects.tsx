import { projects } from "@/data"
import { ProjectCard } from "./ProjectCard"

const RecentProjects = () => {
  return (
    <section className="py-12" id="projects">
       <h1 className="heading">
        small selection of {` `} 
        <span className="text-purple">My recent Projects </span>
       </h1>
       <div className="flex flex-wrap lg:flex-row justify-center p-4 gap-10 mt-8 rounded-lg">
  {projects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>

    </section>
  )
}

export default RecentProjects
