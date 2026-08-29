import { profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React</p>
      </div>
    </footer>
  )
}
