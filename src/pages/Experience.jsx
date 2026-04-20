import { motion } from 'framer-motion';
import { experience } from '../data/content';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>Experience</h2>
            <h1>实习经历</h1>
            <p>从律所到科技公司，每段经历都是成长</p>
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="exp-card"
              >
                <div className="exp-icon">
                  <Briefcase size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '18px' }}>{exp.company}</h3>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      color: 'var(--text)',
                      opacity: 0.7,
                    }}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="exp-position">{exp.position}</p>
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}