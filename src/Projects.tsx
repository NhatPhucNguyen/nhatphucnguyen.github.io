import ProjectItem from "./components/ProjectItem";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import projectData from "./projectData";
import "./styles/Projects.css";
const Projects = () => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.5,
    });
    return (
        <section className="project-section">
            <h2
                ref={ref}
                className={`section-title ${isVisible ? "scroll-reveal" : ""}`}
            >
                Features Project
            </h2>
            <div className="projects-container">
                {projectData.map((item, index) => {
                    return (
                        <ProjectItem
                            name={item.name}
                            description={item.description}
                            image={`/images/${
                                item.image || "project-img.jpg"
                            }`}
                            link={item.link}
                            github={item.github}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
};
export default Projects;
