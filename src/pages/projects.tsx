import ProjectCard from "../components/projects/project_card"
import img from "../assets/react.svg"
import type { Project } from "../types/project"

let projects: Project[] = [
    {
        title: "Project 1",
        description: "Description for project 1",
        thumbnail: img,
        icon: img,
        tags: ["react", "frontend"]
    },
    {
        title: "Project 2",
        description: "Description for project 2",
        thumbnail: img,
        tags: ["typescript", "web"]
    },
    {
        title: "Project 3",
        description: "Description for project 3",
        thumbnail: img,
        tags: ["javascript", "portfolio"]
    },
    {
        title: "Project 4",
        description: "Description for project 4",
        thumbnail: img,
        tags: ["css", "design"]
    }
];

function ProjectsPage() {
    return <>
      <div>
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
      </div>
    </>
}

export default ProjectsPage