import React from 'react';
import { Users, Twitter, Linkedin, Github } from 'lucide-react';
import { FeedbackForm } from '../feedback/FeedbackForm';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section - White */}
      <div className="bg-gradient-to-b from-white via-white to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">ThinkingMode</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Where thoughts flow freely and typing becomes an art form.
          </p>
        </div>
      </div>

      {/* Story Section - Blue */}
      <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-200 shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
              <p>
                ThinkingMode was born from a simple observation: traditional typing tests felt mechanical, 
                disconnected from the natural flow of human thought. We envisioned something different—a 
                platform that honors the stream-of-consciousness nature of thinking and writing.
              </p>
              <p>
                In a world where communication happens at the speed of thought, your typing speed shouldn't 
                be a bottleneck. ThinkingMode bridges the gap between mind and machine, creating a seamless 
                experience that feels less like a test and more like pure expression.
              </p>
              <p>
                Built with cutting-edge technology and a deep understanding of human cognition, we've crafted 
                an environment where practice feels effortless, progress is tangible, and improvement becomes 
                addictive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision - White */}
      <div className="bg-gradient-to-b from-blue-50 via-white to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-serif text-neutral-900 mb-6 tracking-tight">Our Mission</h3>
              <p className="text-neutral-700 leading-relaxed text-lg">
                To empower individuals to type at the speed of thought, breaking down the barrier between 
                ideation and expression through innovative technology and thoughtful design.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-3xl font-serif text-neutral-900 mb-6 tracking-tight">Our Vision</h3>
              <p className="text-neutral-700 leading-relaxed text-lg">
                We envision a future where typing is as natural as speaking, where everyone can translate 
                their thoughts into text effortlessly, enabling clearer communication and more productive work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values - Blue */}
      <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">What We Believe In</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Speed & Precision',
                desc: 'Every millisecond matters. Our Ghost Engine delivers zero-latency feedback for an unparalleled typing experience.'
              },
              {
                title: 'User-Centric Design',
                desc: 'Beautiful, intuitive, and accessible. We craft experiences that delight while maintaining laser focus on functionality.'
              },
              {
                title: 'Continuous Growth',
                desc: 'Track your progress with deep analytics. Celebrate improvements and identify areas to refine your craft.'
              }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-2xl font-serif text-neutral-900 mb-4 tracking-tight">{value.title}</h4>
                <p className="text-neutral-700 leading-relaxed text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack - White */}
      <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Built With Excellence</h2>
            <p className="text-neutral-700 leading-relaxed text-lg mb-8">
              ThinkingMode leverages modern web technologies to deliver a fast, reliable, and beautiful experience:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Zustand', 'Vite', 'Lucide Icons'].map((tech, i) => (
                <div key={i} className="bg-blue-50/50 rounded-xl p-4 text-center border border-blue-200 hover:border-blue-400 hover:bg-blue-100/50 transition-colors">
                  <p className="text-neutral-800 font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Blue */}
      <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Meet the Creator</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img 
                    src="/vicky-avatar.png" 
                    alt="Vicky Kumar" 
                    className="w-32 h-32 rounded-full border-4 border-blue-200 shadow-xl"
                  />
                </div>
                
                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-serif text-neutral-900 mb-2 tracking-tight">Vicky Kumar</h3>
                  <p className="text-neutral-600 mb-4 italic">Passionate Developer • Creator • Learner</p>
                  <p className="text-neutral-700 leading-relaxed text-lg mb-6">
                    Solo developer building ThinkingMode with a vision to transform how people practice typing. 
                    Passionate about creating beautiful, functional experiences that make a difference.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a 
                      href="https://twitter.com/Kumarcreator1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-50 hover:bg-blue-500 border border-blue-300 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all group"
                      aria-label="Twitter"
                    >
                      <Twitter className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/Kumarcreator1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-50 hover:bg-blue-500 border border-blue-300 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                    </a>
                    <a 
                      href="https://github.com/Kumarcreator1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-50 hover:bg-blue-500 border border-blue-300 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all group"
                      aria-label="GitHub"
                    >
                      <Github className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section - White */}
      <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200 shadow-lg">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Join Our Community</h2>
            <p className="text-neutral-700 text-lg max-w-2xl mx-auto mb-8">
              ThinkingMode is more than just a typing platform—it's a community of learners, writers, 
              developers, and anyone who believes that communication matters. Join us on this journey 
              to type better, think clearer, and express more freely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-800 rounded-full font-bold border-2 border-neutral-300 hover:border-blue-300 transition-all shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section - Blue */}
      <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FeedbackForm scriptUrl="https://script.google.com/macros/s/AKfycbzmjOp3HX3leLadlX6QJCnAAyLd-WXn9fpfLV-Nw8hspBuz6RSrhR31ArXw8A6mwIWA/exec" />
        </div>
      </div>

      {/* Footer Quote - Light Blue */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-neutral-600 italic max-w-3xl mx-auto">
            "The difference between the almost right word and the right word is really a large matter—
            it's the difference between the lightning bug and the lightning."
          </blockquote>
          <p className="text-neutral-500 mt-4">— Mark Twain</p>
        </div>
      </div>
    </div>
  );
};
