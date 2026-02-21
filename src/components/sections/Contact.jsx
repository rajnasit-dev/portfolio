import React, { useState } from 'react'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants'
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import FadeIn from '../animations/Fadein'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'cd00020b-1122-439f-bc58-853dc04c249d',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
              Get In Touch
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <FadeIn delay={150}>
              <p className="text-base text-white/50 leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-4 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Location</div>
                    <div className="text-sm text-white/80">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Socials */}
            <FadeIn delay={250}>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                  >
                    <Github className="w-[18px] h-[18px] text-white/50 group-hover:text-white transition-colors" />
                  </a>
                )}
                {SOCIAL_LINKS.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                  >
                    <Linkedin className="w-[18px] h-[18px] text-white/50 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={200}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 mb-2 ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-2 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-2 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-2 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/25 focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="self-start inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm mt-2">
                    <CheckCircle className="w-4 h-4" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
