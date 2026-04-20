import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2>Contact</h2>
            <h1>联系我</h1>
            <p>期待与您交流合作</p>
          </div>

          <div className="contact-grid">
            {/* Email */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="contact-card"
            >
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <p className="contact-label">邮箱</p>
                <p className="contact-value">{personalInfo.email}</p>
              </div>
            </motion.a>

            {/* WeChat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="contact-card"
            >
              <div className="contact-icon">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="contact-label">微信</p>
                <p className="contact-value">{personalInfo.wechat}</p>
              </div>
            </motion.div>
          </div>

          {/* Message Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="contact-form"
            onSubmit={e => {
              e.preventDefault();
              alert('感谢留言！我会尽快回复。');
            }}
          >
            <div className="form-group">
              <label>留言</label>
              <textarea
                required
                placeholder="请输入您的留言..."
              />
            </div>
            <button type="submit" className="submit-btn">
              <Send size={18} />
              发送消息
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}