import { motion } from 'framer-motion';
import { education, skills } from '../data/content';
import { BookOpen, Award } from 'lucide-react';

export default function About() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>Education</h2>
            <h1>教育背景</h1>
            <p>西南政法大学 · 法学 + 金融学双学位</p>
          </div>

          {/* Education Card */}
          <div className="card" style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-border)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <BookOpen size={24} color="var(--accent)" />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '8px' }}>{education.school}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '8px' }}>{education.period}</p>
                <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.7 }}>
                  {education.degree}
                </p>
              </div>
            </div>
            <div style={{
              marginTop: '24px',
              padding: '16px 20px',
              background: 'var(--accent-bg)',
              border: '1px solid var(--accent-border)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <Award size={18} color="var(--accent)" />
              <span style={{ fontSize: '14px', color: 'var(--text-h)' }}>{education.awards}</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="section-header">
            <h1>个人技能</h1>
          </div>

          <div className="card-grid">
            {skills.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="skill-category">
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}