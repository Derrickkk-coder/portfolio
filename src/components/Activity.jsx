import { FiCode, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import './Activity.css'

export default function Activity() {
  return (
    <section id="activity" className="activity">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Live Activity</span>
          <h2>Currently Building & On GitHub</h2>
        </div>

        <div className="activity__grid">
          <div className="activity__card">
            <div className="activity__card-icon">
              <FiCode />
            </div>
            <h3>Currently Building</h3>
            <p>{profile.currentlyBuilding}</p>
          </div>

          <div className="activity__card">
            <div className="activity__card-icon">
              <FiGithub />
            </div>
            <h3>On GitHub</h3>
            <p>Check out my repositories, contributions, and open-source activity.</p>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="activity__link"
            >
              @{profile.githubUsername} <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
