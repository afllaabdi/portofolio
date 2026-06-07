'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react'
import { education } from '@/data/portfolio'
import { staggerDelay } from '@/lib/utils'

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="relative py-24 sm:py-32 bg-card/30">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Education &{' '}
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-3 space-y-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-orange-500/30"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-orange-500 border-4 border-background glow-sm" />

              <div className="p-6 rounded-2xl bg-card/80 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20">
                    <GraduationCap size={24} className="text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{education.institution}</h3>
                    <p className="text-orange-400 font-medium text-sm">
                      {education.degree}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {education.period}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {education.gpa}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {education.description}
                </p>

                {/* Relevant Courses */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-semibold mb-2">
                    <BookOpen size={13} className="text-orange-400" />
                    Mata Kuliah Relevan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, i) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + staggerDelay(i, 0.03),
                        }}
                        className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-medium"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-8 border-l-2 border-amber-500/30"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-amber-500 border-4 border-background" />

              <div className="p-6 rounded-2xl bg-card/80 border border-border">
                <h3 className="flex items-center gap-2 text-lg font-bold mb-4">
                  <Trophy size={20} className="text-amber-400" />
                  Prestasi & Aktivitas
                </h3>
                <div className="space-y-3">
                  {education.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + staggerDelay(i, 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <Award size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Visual Card */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-900/40 to-amber-900/20 border border-orange-500/20 p-6 text-center">
              <div className="text-6xl font-bold text-gradient mb-2">2023</div>
              <p className="text-sm text-muted-foreground">Tahun Masuk Kuliah</p>
            </div>

            {/* Area Fokus */}
            <div className="rounded-2xl bg-card/80 border border-border p-6">
              <h4 className="text-sm font-semibold mb-4">Area Fokus</h4>
              <div className="space-y-2">
                {[
                  'Data Science',
                  'Machine Learning',
                  'Computer Vision',
                  'Software Development',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-600/10 border border-orange-500/20 p-6"
            >
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                🚀 Tertarik dengan background saya? Mari diskusikan bagaimana saya bisa
                berkontribusi di tim Anda!
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-4 block text-center text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
              >
                Hubungi Saya →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}