import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "../styles/ProjectItem.css";
type ProjectItemProps = {
    name: string;
    description: string;
    image?: string;
    link: string;
    github: string;
};
const ProjectItem = ({ name, description, image,link,github }: ProjectItemProps) => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.5,
    });
    return (
        <div
            style={{
                backgroundImage: `url(${
                    image || "../../public/images/project-img.jpg"
                })`,
            }}
            className={`project-item ${isVisible ? "scroll-reveal" : ""}`}
            ref={ref}
        >
            <h3 className="project-name">{name}</h3>
            <p className="project-description">{description}</p>
            <div className="project-button-wrapper">
                <a href={link} target="_blank">
                    <button className="project-button">View Project</button>
                </a>
                <a href={github} target="_blank">
                    <button className="project-button">GitHub</button>
                </a>
            </div>
        </div>
    );
};
export default ProjectItem;
