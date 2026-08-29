import { skills } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">My Skills</span>
          <h2>Technologies I Master</h2>
        </div>

        <div className="skills__grid">
          {skills.map(({ name, level, icon: Icon }) => (
            <div className="skill" key={name}>
              <div className="skill__head">
                <span className="skill__name">
                  <Icon /> {name}
                </span>
                <span className="skill__level">{level}%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__fill" style={{ width: `${level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
