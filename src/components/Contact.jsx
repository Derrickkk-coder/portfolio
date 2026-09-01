import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import './Contact.css'

const socialLinks = [
  { icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__text">
          <span className="eyebrow">Let's Work Together</span>
          <h2>Have a project or role in mind?</h2>
          <p>Whether you're looking to build a new web application or add a developer to your team, let's talk.</p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Send an Email <FiArrowRight />
          </a>
        </div>

        <div className="contact__card">
          <div className="contact__email">
            <FiMail />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact__socials">
            <span>Connect</span>
            <div className="contact__social-icons">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
