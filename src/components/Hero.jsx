import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="avatar" style={{ marginBottom: '40px' }}>
              <img src={personalInfo.avatar} alt={personalInfo.name} />
            </div>

            <h1>{personalInfo.name}</h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-desc">{personalInfo.bio}</p>

            <a href={`mailto:${personalInfo.email}`} className="hero-cta">
              <Mail size={18} />
              {personalInfo.email}
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}