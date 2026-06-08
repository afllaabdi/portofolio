'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ScanFace,
  Smartphone,
  Dumbbell,
  ExternalLink,
  Github,
  CheckCircle2,
  ChevronRight,
  Images,
  X,
} from 'lucide-react'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  'scan-face': ScanFace,
  smartphone: Smartphone,
  dumbbell: Dumbbell,
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [lightboxImg, setLightboxImg] = useState<{ label: string; src: string } | null>(null)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Proyek-proyek yang pernah saya kerjakan untuk menunjukkan kemampuan teknis
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const IconComponent = iconMap[project.icon] || ScanFace
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative rounded-2xl bg-card/80 border border-border hover:border-orange-500/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Gradient Header */}
                <div
                  className={cn(
                    'relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br p-6',
                    project.gradient
                  )}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <IconComponent size={36} className="text-white" />
                  </motion.div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    {project.gallery && project.gallery.length > 0 && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Gallery Available
                      </span>
                    )}
                    <span
                      className={cn(
                        'px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider',
                        project.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : project.status === 'ongoing'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-muted/20 text-muted border border-border'
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-orange-400 mt-0.5 flex-shrink-0"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Project Gallery */}
                  {project.gallery && project.gallery.length > 0 && (
                    <div className="mb-5 p-4 rounded-xl bg-secondary/50 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <Images size={14} className="text-orange-400" />
                        <span className="text-xs font-semibold text-muted-foreground">
                          Project Gallery
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {project.gallery.map((img, k) => (
                          <div
                            key={k}
                            onClick={() => img.src && setLightboxImg(img)}
                            className={cn(
                              'relative rounded-lg overflow-hidden border border-border aspect-video flex items-center justify-center cursor-pointer transition-all duration-300',
                              img.src
                                ? 'hover:border-orange-500/40 hover:shadow-md hover:shadow-orange-900/20'
                                : 'bg-card/80 cursor-default'
                            )}
                          >
                            {img.src ? (
                              <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="flex flex-col items-center gap-1 p-2">
                                <div className="w-8 h-8 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                  <Images size={14} className="text-orange-400/50" />
                                </div>
                                <span className="text-[10px] text-muted-foreground/60 text-center leading-tight px-1">
                                  {img.label}
                                </span>
                              </div>
                            )}
                            {img.src && (
                              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                <Images size={16} className="text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <motion.a
                      href={project.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <Github size={15} />
                      Source
                    </motion.a>
                    <motion.a
                      href={project.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={15} />
                      Demo
                    </motion.a>
                    <span className="ml-auto inline-flex items-center gap-0.5 text-xs text-orange-400 font-medium group-hover:gap-1.5 transition-all">
                      Details
                      <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/afllaabdi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border text-sm font-medium hover:border-orange-500/30 hover:bg-secondary/80 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            Lihat Semua Proyek di GitHub
            <ChevronRight size={14} />
          </motion.a>
        </motion.div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-card border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X size={16} />
              </button>
              <div className="p-4 border-b border-border flex items-center gap-2">
                <Images size={14} className="text-orange-400" />
                <span className="text-sm font-medium">{lightboxImg.label}</span>
              </div>
              <img
                src={lightboxImg.src}
                alt={lightboxImg.label}
                className="w-full aspect-video object-contain bg-black/50"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}