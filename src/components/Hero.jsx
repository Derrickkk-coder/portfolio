import { FiArrowRight, FiMail } from 'react-icons/fi'
import { profile, techStack } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>

          <div className="hero__availability">
            <span className="hero__availability-dot" />
            {profile.availability}
          </div>

          <p className="hero__tagline">{profile.headline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk <FiMail />
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
            <img src="/profile.jpg" alt={profile.name} />
          </div>
        </div>
      </div>
    </section>
  )
}
