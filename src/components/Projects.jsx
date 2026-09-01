import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
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

        <div className="case-studies">
          {projects.map((project, i) => (
            <article className="case-study" key={project.id}>
              <div
                className={`case-study__thumb ${project.image ? '' : `thumb-${(i % 4) + 1}`}`}
                style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
              />

              <div className="case-study__body">
                <h3>{project.title}</h3>
                <p className="case-study__tagline">{project.tagline}</p>

                <div className="case-study__block">
                  <span className="case-study__label">Problem</span>
                  <p>{project.problem}</p>
                </div>

                <div className="case-study__block">
                  <span className="case-study__label">Solution</span>
                  <p>{project.solution}</p>
                </div>

                <ul className="case-study__features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="case-study__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="case-study__actions">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live Demo <FiArrowUpRight />
                  </a>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline">
                      GitHub Repo <FiGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
