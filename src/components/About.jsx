import { FiArrowRight } from 'react-icons/fi'
import { profile, stats } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="eyebrow">About Me</span>
          <h2>{profile.aboutHeading}</h2>
          <p>{profile.aboutBody}</p>
          <a href="#contact" className="btn btn-outline">
            Learn More About Me <FiArrowRight />
          </a>
        </div>

        <div className="about__stats">
          {stats.map(({ icon: Icon, value, label }) => (
            <div className="stat-card" key={label}>
              <div className="stat-card__icon">
                <Icon />
              </div>
              <div>
                <div className="stat-card__value">{value}</div>
                <div className="stat-card__label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
