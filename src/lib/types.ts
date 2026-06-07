export interface Skill {
  name: string
  category: 'language' | 'framework' | 'tool' | 'soft'
  level: number // 0-100
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  icon: string
  gradient: string
  link?: string
  github?: string
  status: 'completed' | 'ongoing' | 'archived'
}

export interface Education {
  institution: string
  degree: string
  period: string
  description: string
  achievements: string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}