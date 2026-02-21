import React from 'react'
import { projects } from '../../data/projects'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import FadeIn from '../animations/Fadein'

const ProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Image */}
      <FadeIn delay={200}>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group overflow-hidden rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-primary font-medium">
              <span>View Live</span>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </a>
      </FadeIn>

      {/* Content */}
      <FadeIn delay={300}>
        <div className="flex flex-col gap-5">
          <span className="text-xs font-medium text-primary uppercase tracking-widest">
            {project.category}
          </span>

          <h3 className="text-2xl lg:text-3xl font-normal text-white leading-snug">
            {project.title}
          </h3>

          {project.description && (
            <p className="text-base text-white/60 leading-relaxed max-w-lg">
              {project.description}
            </p>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
              Projects
            </h2>
          </FadeIn>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects