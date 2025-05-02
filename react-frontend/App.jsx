// src/App.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockTitles = [
  'Welcome to My React App',
  'Powered by Vite ⚡',
  'Smooth animations with Framer Motion',
  'Let’s build something awesome!',
];

function App() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    // Simulate async data loading
    const timeout = setTimeout(() => {
      setTitles(mockTitles);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Animated Titles</h1>
      <AnimatePresence>
        {titles.map((title, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{
              marginBottom: '1rem',
              padding: '1rem',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
            }}
          >
            {title}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;
