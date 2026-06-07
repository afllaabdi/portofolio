'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Server, Palette, Database, Layers } from 'lucide-react'
import { skills } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'language', label: 'Languages', icon: Code2 },
  { id: 'framework', label: 'Frameworks', icon: Server },
  { id: 'tool', label: 'Data & Tools', icon: Database },
  { id: 'soft', label: 'Specializations', icon: Palette },
]

const categoryHoverBorder = {
  all: 'hover:border-orange-500/40',
  language: 'hover:border-blue-500/40',
  framework: 'hover:border-orange-500/40',
  tool: 'hover:border-emerald-500/40',
  soft: 'hover:border-violet-500/40',
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory)

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'language': return 'Language'
      case 'framework': return 'Framework'
      case 'tool': return 'Tool'
      case 'soft': return 'Specialization'
      default: return 'Tech'
    }
  }

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-card/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Skills &{' '}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun solusi digital
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-900/30'
                  : 'bg-secondary/80 border border-border text-muted-foreground hover:text-foreground hover:border-orange-500/30'
              )}
            >
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid — Logo Badges */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={cn(
                'group relative flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/80 border border-border hover:border-orange-500/30 transition-all duration-300 cursor-default',
                categoryHoverBorder[skill.category as keyof typeof categoryHoverBorder] || ''
              )}
            >
              {/* Logo Badge */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-base shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                style={{
                  backgroundColor: skill.color,
                  color: skill.textColor,
                  boxShadow: `0 4px 20px ${skill.color}55`,
                }}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {skill.label}
              </motion.div>

              {/* Skill Name */}
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground group-hover:text-orange-400 transition-colors leading-tight">
                  {skill.name}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {getCategoryLabel(skill.category)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-card/60 border border-border"
        >
          <p className="text-center text-sm text-muted-foreground">
            <span className="text-orange-400 font-semibold">⚡ Quick Stats:</span>{' '}
            {skills.length} technologies across{' '}
            <span className="text-foreground font-medium">5 categories</span>, with a
            strong focus on Python, Data Science, Computer Vision, and Software
            Development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}