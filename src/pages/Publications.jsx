import { motion } from 'framer-motion';
import { publications } from '../data/content';
import { FileText, ExternalLink } from 'lucide-react';

export default function Publications() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>Publications</h2>
            <h1>法律研究</h1>
            <p>深入前沿法律问题，探索合规解决方案</p>
          </div>

          <div className="card-grid">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.4 }}
                className="pub-card"
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-border)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FileText size={20} color="var(--accent)" />
                  </div>
                  <h3 className="pub-title">{pub.title}</h3>
                </div>
                <p className="pub-desc">{pub.description}</p>
                <a href="#" className="pub-link">
                  阅读全文 <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}