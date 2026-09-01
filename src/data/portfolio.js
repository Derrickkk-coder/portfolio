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
  role: 'I’M A SOFTWARE ENGINEER',
  headline: 'I craft clean, reliable software.',
  tagline:
    'I’m a software engineer who enjoys turning ideas into fast, well-built applications — from the first line of code to the final deploy.',
  aboutHeading: 'I’m passionate about creating digital solutions',
  aboutBody:
    'With hands-on experience across the stack, I help businesses and individuals bring their ideas to life through clean, efficient, and well-structured code.',
  email: 'akwaboahderrick1@gmail.com',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/Derrickkk-coder',
    linkedin: 'https://www.linkedin.com/in/derrick-akwaboah-453451310/',
    twitter: '#',
    instagram: '#',
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

export const skills = [
  { name: 'HTML', level: 90, icon: SiHtml5 },
  { name: 'React.js', level: 85, icon: SiReact },
  { name: 'Node.js', level: 75, icon: SiNodedotjs },
  { name: 'CSS', level: 85, icon: SiCss },
  { name: 'TypeScript', level: 75, icon: SiTypescript },
  { name: 'Tailwind CSS', level: 80, icon: SiTailwindcss },
  { name: 'JavaScript', level: 85, icon: SiJavascript },
  { name: 'Git', level: 80, icon: SiGit },
]

export const projects = [
  {
    id: 1,
    title: 'QuizMe',
    description: 'An interactive quiz platform built to help users learn, practice, and track their improvement across topics.',
    tags: ['React', 'Next.js'],
    link: 'https://eduquiz-innovate-x4.vercel.app/',
    image: '/projects/quizme.png',
  },
  {
    id: 2,
    title: 'NextLeap',
    description: 'My final-year project — a platform connecting users with their next career opportunity, from discovery to application.',
    tags: ['React', 'Next.js', 'Node.js'],
    link: 'https://final-year-project-11136525-up6r.vercel.app/',
    image: '/projects/nextleap.png',
  },
  {
    id: 3,
    title: 'Baaba Hanson',
    description: 'A full online store for Beauty, Fashion, Electronics, and Home & Living, with secure payments and fast delivery.',
    tags: ['React', 'Next.js', 'Shopify'],
    link: 'https://baabahanson.com/',
    image: '/projects/baabahanson.png',
  },
]
