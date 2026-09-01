import { useEffect, useState } from 'react'
import { FiCode, FiGithub, FiArrowUpRight, FiStar, FiGitBranch } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import './Activity.css'

export default function Activity() {
  const [repos, setRepos] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=10`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const top = data
          .filter((r) => !r.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 3)
        setRepos(top)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

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

        {!failed && (
          <div className="repo-list">
            {repos === null
              ? Array.from({ length: 3 }).map((_, i) => <div className="repo-card repo-card--skeleton" key={i} />)
              : repos.map((repo) => (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-card"
                    key={repo.id}
                  >
                    <div className="repo-card__head">
                      <FiGithub />
                      <span className="repo-card__name">{repo.name}</span>
                    </div>
                    <p className="repo-card__desc">{repo.description || 'No description provided.'}</p>
                    <div className="repo-card__meta">
                      {repo.language && <span className="repo-card__lang">{repo.language}</span>}
                      <span>
                        <FiStar /> {repo.stargazers_count}
                      </span>
                      <span>
                        <FiGitBranch /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
          </div>
        )}
      </div>
    </section>
  )
}
