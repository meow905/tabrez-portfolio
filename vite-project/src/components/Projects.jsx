import { projects } from "../data";

export default function Projects() {
    return (
        <section className="projects__container" id="projects">
            <h2 className="projects__title">My projects</h2>
            <div className="projects">
                {projects.map((project)=> {
                    return (
                      <div className="project-container" key={project.title}>
                        <img
                          src={project.imageSrc}
                          className="project-img"
                          alt="project"
                        />
                        <h3 className="project-title">{project.title}</h3>

                        <div className="project-links">
                          <a
                            target="_blank"
                            href={project.demo}
                            className="project-link"
                          >
                            Preview
                          </a>
                        </div>
                      </div>
                    );
                })}
            </div>
        </section>
    )
}