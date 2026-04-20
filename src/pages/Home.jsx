import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { education, experience, skills } from '../data/content';

export default function Home() {
  return (
    <>
      <Hero />

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          {/* Education Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '64px' }}
          >
            <h2>Education</h2>
            <div className="card">
              <h3 style={{ marginBottom: '8px' }}>{education.school}</h3>
              <p style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '8px' }}>{education.period}</p>
              <p style={{ fontSize: '14px', color: 'var(--text)' }}>{education.degree}</p>
              <div className="inline-tags">
                <span className="inline-tag">{education.awards}</span>
              </div>
            </div>
            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px', fontSize: '14px' }}>
              View details <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '64px' }}
          >
            <h2>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map((group, i) =>
                group.items.map(item => (
                  <span key={`${i}-${item}`} className="skill-tag">{item}</span>
                ))
              )}
            </div>
          </motion.div>

          {/* Experience Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Experience</h2>
            {experience.slice(0, 2).map((exp, i) => (
              <div key={i} className="card" style={{ marginBottom: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '6px' }}>{exp.company}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '13px' }}>{exp.period}</p>
                <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text)' }}>{exp.position}</p>
              </div>
            ))}
            <Link to="/experience" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px', fontSize: '14px' }}>
              View all experience <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}