import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { profile, techStack } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">{profile.role}</span>
          <h1>
            Hi, I’m <span className="gradient-text">{profile.firstName}</span>
            <br />
            {profile.headline}
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href={profile.resumeUrl} className="btn btn-outline">
              Download CV <FiDownload />
            </a>
          </div>

          <div className="hero__stack">
            <span>Technologies I work with</span>
            <div className="hero__stack-icons">
              {techStack.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__blob" />
          <div className="hero__dots" />

          <div className="hero__photo">
            <img src="/profile.png" alt={profile.name} />
          </div>

          <div className="hero__code-card hero__code-card--float">
            <div className="hero__code-bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="hero__code-title">developer.js</span>
            </div>
            <pre className="hero__code-body">
{`const developer = {
  name: "${profile.firstName}",
  skills: [
    "React", "Node.js",
    "TypeScript"
  ],
  passion: "Building for
            the web"
};`}
            </pre>
          </div>

          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for work
          </div>
        </div>
      </div>
    </section>
  )
}
