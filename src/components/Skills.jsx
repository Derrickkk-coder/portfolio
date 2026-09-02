import { techCategories } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">My Skills</span>
          <h2>Tech Ecosystem</h2>
        </div>

        <div className="tech-categories">
          {techCategories.map(({ name, items }) => (
            <div className="tech-category" key={name}>
              <h3>{name}</h3>
              <div className="tech-category__items">
                {items.map(({ name: toolName, icon: Icon }) => (
                  <span className="tech-chip" key={toolName}>
                    <Icon aria-hidden="true" focusable="false" /> {toolName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
