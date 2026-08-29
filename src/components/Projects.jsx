import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Featured Projects</span>
          <h2>Some of My Recent Work</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <a
              href={project.link}
              className="project-card"
              key={project.id}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`project-card__thumb ${project.image ? '' : `thumb-${(i % 4) + 1}`}`}
                style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
              >
                <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-card__link">
                  View Project <FiArrowUpRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
