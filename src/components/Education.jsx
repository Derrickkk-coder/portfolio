import { timeline } from '../data/portfolio'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Background</span>
          <h2>Education & Experience</h2>
        </div>

        <div className="timeline">
          {timeline.map(({ id, icon: Icon, title, place, period }) => (
            <div className="timeline-item" key={id}>
              <div className="timeline-item__icon">
                <Icon />
              </div>
              <div className="timeline-item__body">
                <div className="timeline-item__period">{period}</div>
                <h3>{title}</h3>
                <p>{place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
