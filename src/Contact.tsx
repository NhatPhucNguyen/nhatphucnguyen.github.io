import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { FaMapMarkerAlt } from "react-icons/fa";
import { socialLinks } from "./socialLinksData";
import "./styles/Contact.css";

const Contact = () => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.2,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2
                    ref={ref}
                    className={`section-title ${isVisible ? "scroll-reveal" : ""}`}
                >
                    Let's Connect
                </h2>
                
                <div className={`contact-content ${isVisible ? "contact-visible" : ""}`}>
                    <div className="contact-info">
                        <div className="location">
                            <FaMapMarkerAlt className="location-icon" />
                            <span>Toronto, Canada</span>
                        </div>
                        
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="social-link"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="form-textarea"
                            ></textarea>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                            <a 
                                href="/Edward_resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                View Resume
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;