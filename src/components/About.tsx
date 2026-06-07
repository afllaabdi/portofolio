'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin,
  GraduationCap,
  BrainCircuit,
  Code2,
  Eye,
  Layers,
} from 'lucide-react'
import { profile, languages } from '@/data/portfolio'
import { staggerDelay } from '@/lib/utils'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Data Science & AI',
    desc: 'Membangun model machine learning dan solusi AI untuk berbagai kasus, dari analisis data hingga computer vision.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Mengembangkan aplikasi web dan mobile menggunakan Laravel, Flutter, dan Python dengan pendekatan clean code.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    desc: 'Berpengalaman dengan OpenCV dan face recognition untuk membangun sistem berbasis penglihatan komputer.',
  },
  {
    icon: Layers,
    title: 'Technology Enthusiast',
    desc: 'Selalu mempelajari teknologi baru dan mengembangkan proyek untuk meningkatkan kemampuan teknis.',
  },
]

const focusAreas = [
  { label: 'Data Science', icon: BrainCircuit },
  { label: 'Machine Learning', icon: Code2 },
  { label: 'Computer Vision', icon: Eye },
  { label: 'Software Development', icon: Layers },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 sm:py-32">
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Kenalan Lebih Dekat{' '}
            <span className="text-gradient">Denganku</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-6">
              {/* Location & Education */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 border border-border text-sm">
                  <MapPin size={14} className="text-orange-400" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 border border-border text-sm">
                  <GraduationCap size={14} className="text-orange-400" />
                  UMM — S1 Teknik Informatika
                </span>
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Perjalanan saya di dunia teknologi dimulai dari ketertarikan terhadap
                  bagaimana data dapat bercerita. Dari situlah saya mulai mendalami Data Science
                  dan Machine Learning, sembari mengasah kemampuan di bidang pengembangan
                  perangkat lunak.
                </p>
                <p>
                  Sejauh ini, saya telah membangun berbagai proyek mulai dari sistem absensi
                  berbasis face recognition, aplikasi mobile untuk reservasi layanan, hingga
                  platform manajemen gym. Setiap proyek menjadi kesempatan untuk belajar
                  hal baru dan memahami kebutuhan pengguna secara nyata.
                </p>
                <p>
                  Ke depan, saya ingin berkontribusi di bidang AI dan software development,
                  membangun solusi teknologi yang bermanfaat secara langsung bagi masyarakat.
                </p>
              </div>

              {/* Area Fokus */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                  <BrainCircuit size={16} className="text-orange-400" />
                  Area Fokus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area, i) => (
                    <motion.span
                      key={area.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + staggerDelay(i, 0.05),
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-medium"
                    >
                      <area.icon size={12} />
                      {area.label}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                  <span className="text-orange-400">🌐</span>
                  Bahasa
                </h4>
                <div className="space-y-2">
                  {languages.map((lang, i) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + staggerDelay(i, 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <div>
                        <p className="text-sm font-medium">{lang.name}</p>
                        <p className="text-xs text-muted-foreground">{lang.level}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + staggerDelay(i, 0.12) }}
                className="group relative p-6 rounded-2xl bg-card/80 border border-border hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/10 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 transition-all duration-500" />

                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
                    <item.icon size={22} className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}