import React from 'react'
import { services } from '../../data/services'
import { Layout, Code, Server, Database, Smartphone, Zap } from 'lucide-react'
import FadeIn from '../animations/Fadein'

const iconMap = {
  Layout,
  Code,
  Server,
  Database,
  Smartphone,
  Zap,
}

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
              Services
            </h2>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeIn key={service.id} delay={100 + index * 80}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative h-full bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-400 flex flex-col gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      {Icon && <Icon className="w-5 h-5 text-primary" />}
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services