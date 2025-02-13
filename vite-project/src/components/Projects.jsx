import { projects } from "../data";

export default function Projects() {
    return (
        <section className="projects__container" id="projects">
            <h2 className="projects__title">Проекты</h2>
            <div className="projects">
                {projects.map((project)=> {
                    return (
                        <div className="project-container" key={project.title}>
                            <img src={project.imageSrc} className="project-img" alt="project" />
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-links">
                                
                                <a target="_blank" href={project.demo} className="project-link">Посмотреть</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}