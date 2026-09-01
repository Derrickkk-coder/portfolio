// Edit this file to personalize your portfolio content.
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si'
import { FiCalendar, FiCode, FiSmile, FiAward, FiBookOpen } from 'react-icons/fi'

export const profile = {
  name: 'Derrick Akwaboah',
  firstName: 'Derrick',
  role: 'Software Engineer & Full-Stack Developer',
  headline: 'I build scalable web applications and digital products that solve real-world problems.',
  availability: 'Available for full-time roles & contract work',
  aboutHeading: 'I’m passionate about creating digital solutions',
  aboutBody:
    'With hands-on experience across the stack, I help businesses and individuals bring their ideas to life through clean, efficient, and well-structured code.',
  email: 'akwaboahderrick1@gmail.com',
  resumeUrl: '/resume.pdf',
  githubUsername: 'Derrickkk-coder',
  currentlyBuilding:
    'Refining this portfolio and exploring new full-stack project ideas.',
  socials: {
    github: 'https://github.com/Derrickkk-coder',
    linkedin: 'https://www.linkedin.com/in/derrick-akwaboah-453451310/',
  },
}

export const stats = [
  { icon: FiCalendar, value: '2+', label: 'Years Experience' },
  { icon: FiCode, value: '10+', label: 'Projects Completed' },
  { icon: FiSmile, value: '5+', label: 'Happy Clients' },
  { icon: FiAward, value: '100%', label: 'Client Satisfaction' },
]

export const timeline = [
  {
    id: 1,
    type: 'education',
    icon: FiBookOpen,
    title: 'BSc in Information Technology',
    place: 'University of Ghana, Legon',
    period: '2022 — 2026',
  },
]

export const techStack = [SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNodedotjs]

export const techCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    name: 'Backend',
    items: [{ name: 'Node.js', icon: SiNodedotjs }],
  },
  {
    name: 'Tools & Workflow',
    items: [{ name: 'Git', icon: SiGit }],
  },
]

// Problem/Solution/Features text is drafted from what's visible on each
// live site — review and correct the specifics (your actual role, the
// real problem, features you built) before treating this as final copy.
export const projects = [
  {
    id: 1,
    title: 'EduQuiz',
    tagline: 'Subject-based quiz platform for Junior High Schools',
    problem:
      'Students and teachers lacked an easy way to practice and track progress across core JHS subjects outside the classroom.',
    solution:
      'Built a quiz platform covering subjects like Mathematics, English, Integrated Science, and Social Studies, with separate student and teacher experiences and instant grading.',
    features: [
      'Role-based student and teacher logins',
      'Auto-graded quizzes across multiple JHS subjects',
      'Progress tracking per subject and topic',
      'Clean, distraction-free quiz-taking interface',
    ],
    tags: ['React', 'Next.js'],
    link: 'https://eduquiz-innovate-x4.vercel.app/',
    repo: 'https://github.com/Derrickkk-coder/quizme',
    image: '/projects/quizme.png',
  },
  {
    id: 2,
    title: 'NextLeap',
    tagline: 'Job-matching platform connecting candidates with employers',
    problem:
      'Job seekers in Ghana struggle to find verified, relevant openings, while employers struggle to reach the right local candidates.',
    solution:
      'Built a full-stack job board (my final-year project) with role-based dashboards for candidates and employers, job posting, search, and application tracking.',
    features: [
      'Separate candidate and employer dashboards',
      'Job posting, search, and filtering',
      'Application tracking from submission to review',
      'Skills-based job matching',
    ],
    tags: ['React', 'Next.js', 'Node.js'],
    link: 'https://final-year-project-11136525-up6r.vercel.app/',
    repo: 'https://github.com/Derrickkk-coder/Final-year-project---11136525',
    image: '/projects/nextleap.png',
  },
  {
    id: 3,
    title: 'Baaba Hanson',
    tagline: 'Multi-category e-commerce store',
    problem:
      'Needed a modern, trustworthy online store for a retail brand spanning Beauty, Fashion, Electronics, and Home & Living.',
    solution:
      'Built a full e-commerce storefront with category browsing, cart and checkout, and promotional features designed to drive conversions.',
    features: [
      'Multi-category product catalog and search',
      'Cart and checkout flow',
      'Promotional pricing and welcome discounts',
      'Fully responsive storefront',
    ],
    tags: ['React', 'Next.js', 'Shopify'],
    link: 'https://baabahanson.com/',
    repo: '',
    image: '/projects/baabahanson.png',
  },
]
