import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { skills } from "./skillsData";
import "./styles/Skills.css";

const Skills = () => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.2,
    });

    return (
        <section className="skills-section">
            <h2
                ref={ref}
                className={`section-title ${isVisible ? "scroll-reveal" : ""}`}
            >
                Skills & Technologies
            </h2>
            <div className={`skills-grid ${isVisible ? "skills-visible" : ""}`}>
                {skills.map((skill, index) => (
                    <div 
                        key={skill} 
                        className="skill-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <h3 className="skill-name">{skill}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
