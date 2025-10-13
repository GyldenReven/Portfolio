import ProjectCard from "../components/projects/project_card"
import { projects } from "../types/project"

function ProjectsPage() {
    return <>
      <section className="copper-plate">
        <h1>
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              project={project}
            />
          ))}
        </div>
      </section>
    </>
}

export default ProjectsPage