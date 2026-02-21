import React, { useState } from 'react'
import { skills } from '../../data/skills'
import { Monitor, Server, Wrench } from 'lucide-react'
import FadeIn from '../animations/Fadein'

const categoryConfig = {
  frontend: {
    label: 'Frontend',
    description: 'Building responsive and interactive user interfaces',
    icon: Monitor,
  },
  backend: {
    label: 'Backend',
    description: 'Server-side logic, APIs and database management',
    icon: Server,
  },
  tools: {
    label: 'Tools & Others',
    description: 'Development tools and workflow essentials',
    icon: Wrench,
  },
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const categorizedSkills = {
    frontend: skills.filter((skill) => skill.category === 'frontend'),
    backend: skills.filter((skill) => skill.category === 'backend'),
    tools: skills.filter((skill) => skill.category === 'tools'),
  }

  const renderIcon = (IconComponent, className = 'w-5 h-5') => {
    return IconComponent ? <IconComponent className={className} /> : null
  }

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
              Skills & Technologies
            </h2>
          </FadeIn>
        </div>

        {/* Category Tabs */}
        <FadeIn delay={300}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {Object.entries(categoryConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === key
                    ? 'bg-primary/15 border-primary/40 text-primary'
                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {renderIcon(config.icon, 'w-4 h-4')}
                {config.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === key
                      ? 'bg-primary/20 text-primary'
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {categorizedSkills[key]?.length || 0}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Category Description */}
        <FadeIn delay={350}>
          <div className="text-center mb-10">
            <p className="text-sm text-white/50">
              {categoryConfig[activeCategory].description}
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categorizedSkills[activeCategory]?.map((skill, index) => (
            <FadeIn key={skill.id} delay={100 + index * 60}>
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-300 flex flex-col items-center gap-4 text-center">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300">
                    <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Total Skills Summary */}
        <FadeIn delay={500}>
          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
              {Object.entries(categoryConfig).map(([key, config], index) => (
                <React.Fragment key={key}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary font-mono">
                      {categorizedSkills[key]?.length || 0}
                    </div>
                    <div className="text-xs text-white/50">{config.label}</div>
                  </div>
                  {index < Object.entries(categoryConfig).length - 1 && (
                    <div className="w-px h-8 bg-white/10"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Skills