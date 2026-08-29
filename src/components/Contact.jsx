import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import './Contact.css'

const socialLinks = [
  { icon: FiGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: profile.socials.twitter, label: 'Twitter' },
  { icon: FiInstagram, href: profile.socials.instagram, label: 'Instagram' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__text">
          <span className="eyebrow">Let's Work Together</span>
          <h2>Have a project in mind?</h2>
          <p>I'm always open to discussing new projects and opportunities. Let's create something amazing together.</p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Get In Touch <FiArrowRight />
          </a>
        </div>

        <div className="contact__card">
          <div className="contact__email">
            <FiMail />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact__socials">
            <span>Follow Me</span>
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
