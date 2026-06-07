'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import { profile } from '@/data/portfolio'

const floatingIcons = [
  { icon: Code2, delay: 0, x: '10%', y: '20%', size: 20 },
  { icon: Database, delay: 0.5, x: '85%', y: '15%', size: 22 },
  { icon: BrainCircuit, delay: 1, x: '80%', y: '75%', size: 18 },
  { icon: Zap, delay: 1.5, x: '15%', y: '80%', size: 20 },
]

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-900/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex text-orange-500/20"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.icon size={item.size} />
        </motion.div>
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(25 95% 53% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6"
            >
              <Sparkles size={14} className="animate-pulse" />
              Data Scientist & Software Engineer
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0"
            >
              {profile.title}
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => handleScroll('#projects')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
              <motion.a
                href="/portofolio/Afllah_Abdi_Pratomo_CV.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-secondary border border-border text-foreground font-semibold hover:bg-secondary/80 hover:border-orange-500/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
                <Download
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '3+', label: 'Projects' },
                { value: '10+', label: 'Technologies' },
                { value: 'AI & Data Science', label: 'Specialization' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/30 via-amber-600/20 to-orange-600/30 rounded-full blur-2xl animate-pulse" />

            {/* Avatar Container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-600/20 to-amber-600/20" />
              <div className="relative w-full h-full rounded-full border-2 border-orange-500/30 overflow-hidden glow">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium shadow-lg"
              >
                <span className="text-orange-400">●</span> Available for Work
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-orange-400"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}