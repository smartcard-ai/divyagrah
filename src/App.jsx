import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="coming-soon-container">
      <div className="overlay"></div>

      {/* Background Elements */}
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="content-card glass"
      >
        <div className="logo-section">
          <img src="/assets/logo.jpg" alt="Divyagrah Logo" className="logo-pulse" />
          <h1 className="brand-title">दिव्यग्रह</h1>
          <p className="brand-subtitle">DIVYAGRAH</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-content"
        >
          <div className="tagline">
            <Sparkles className="icon-gold" size={16} />
            <span>Coming Soon</span>
            <Sparkles className="icon-gold" size={16} />
          </div>

          <h2>Something Divine is Awakening</h2>
          <p>
            We are crafting a sacred digital space for your spiritual journey.
            Experience the purest fragrances and ritual essentials, coming directly to your doorstep.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="notify-form"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="success-message"
            >
              Thank you! We will notify you when we launch.
            </motion.div>
          ) : (
            <div className="input-group">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Notify Me <ArrowRight size={18} />
              </button>
            </div>
          )}
        </motion.form>

        <div className="footer-links">
          <span>Delivery managed by Amazon</span>
          <span className="separator">•</span>
          <span>Authentic & Pure</span>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
